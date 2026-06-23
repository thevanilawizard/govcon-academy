import type { FinState, GovInvoice } from "./types";

const PROMPT_PAYMENT_RATE = 0.015; // 1.5% per 30-day period under FAR 52.232-25

export function createFinStateWithCredit(capital: number): FinState {
  return {
    cash: capital,
    burn: 8500,
    revenue: 0,
    wins: 0,
    proposals: 0,
    totalValue: 0,
    receivables: 0,
    pendingApproval: 0,
    lineOfCreditLimit: Math.round(capital * 0.5),
    lineOfCreditUsed: 0,
  };
}

/** Quarters until payment after approval based on Net-30/60/90. */
export function paymentLagQuarters(termsDays: 30 | 60 | 90): number {
  if (termsDays <= 30) return 1;
  if (termsDays <= 60) return 2;
  return 3;
}

export function calculatePromptPaymentInterest(
  amount: number,
  termsDays: 30 | 60 | 90,
  quartersLate: number
): number {
  if (quartersLate <= 0) return 0;
  const periods = termsDays === 30 ? quartersLate : termsDays === 60 ? quartersLate * 2 : quartersLate * 3;
  return Math.round(amount * PROMPT_PAYMENT_RATE * periods);
}

export interface InvoicePipelineResult {
  invoices: GovInvoice[];
  cashReceived: number;
  interestEarned: number;
  receivables: number;
  pendingApproval: number;
  latePaymentNotes: string[];
}

/** Advance invoice statuses and pay out approved invoices. */
export function processInvoicePipeline(
  allInvoices: GovInvoice[],
  currentQuarter: number
): InvoicePipelineResult {
  let cashReceived = 0;
  let interestEarned = 0;
  const latePaymentNotes: string[] = [];

  const updated = allInvoices.map((inv) => {
    let invoice = { ...inv };

    if (invoice.status === "submitted" && invoice.quarterSubmitted !== undefined) {
      if (currentQuarter > invoice.quarterSubmitted) {
        invoice.status = "approved";
        invoice.quarterApproved = currentQuarter;
      }
    }

    if (invoice.status === "approved" && invoice.quarterApproved !== undefined) {
      const lag = paymentLagQuarters(invoice.paymentTermsDays);
      const dueQuarter = invoice.quarterApproved + lag;

      if (currentQuarter >= dueQuarter) {
        invoice.status = "paid";
        invoice.quarterPaid = currentQuarter;
        cashReceived += invoice.amount;

        const quartersLate = currentQuarter - dueQuarter;
        if (quartersLate > 0) {
          const interest = calculatePromptPaymentInterest(
            invoice.amount,
            invoice.paymentTermsDays,
            quartersLate
          );
          invoice.interestAmount = interest;
          invoice.status = "late";
          interestEarned += interest;
          cashReceived += interest;
          latePaymentNotes.push(
            `FAR 52.232-25 Prompt Payment: ${invoice.periodLabel} paid ${quartersLate} quarter(s) late. Interest earned: $${interest.toLocaleString()}.`
          );
        }
      } else if (currentQuarter === dueQuarter - 1) {
        latePaymentNotes.push(
          `${invoice.periodLabel} payment expected Q${dueQuarter} (Net-${invoice.paymentTermsDays}). Cash not received yet — plan payroll accordingly.`
        );
      }
    }

    return invoice;
  });

  const open = updated.filter((i) => i.status !== "paid" && i.status !== "late");
  const receivables = open
    .filter((i) => i.status === "approved")
    .reduce((s, i) => s + i.amount, 0);
  const pendingApproval = open
    .filter((i) => i.status === "submitted")
    .reduce((s, i) => s + i.amount, 0);

  return {
    invoices: updated,
    cashReceived,
    interestEarned,
    receivables,
    pendingApproval,
    latePaymentNotes,
  };
}

export function aggregateFinFromInvoices(
  fin: FinState,
  allInvoices: GovInvoice[],
  activeNetMonthly: number
): FinState {
  const receivables = allInvoices
    .filter((i) => i.status === "approved")
    .reduce((s, i) => s + i.amount, 0);
  const pendingApproval = allInvoices
    .filter((i) => i.status === "submitted")
    .reduce((s, i) => s + i.amount, 0);

  return {
    ...fin,
    receivables,
    pendingApproval,
    revenue: activeNetMonthly,
  };
}

export function drawLineOfCredit(fin: FinState, amount: number): FinState {
  const available = fin.lineOfCreditLimit - fin.lineOfCreditUsed;
  const draw = Math.min(amount, available);
  if (draw <= 0) return fin;
  return {
    ...fin,
    cash: fin.cash + draw,
    lineOfCreditUsed: fin.lineOfCreditUsed + draw,
  };
}

export function repayLineOfCredit(fin: FinState, amount: number): FinState {
  const repay = Math.min(amount, fin.lineOfCreditUsed, fin.cash);
  if (repay <= 0) return fin;
  return {
    ...fin,
    cash: fin.cash - repay,
    lineOfCreditUsed: fin.lineOfCreditUsed - repay,
  };
}
