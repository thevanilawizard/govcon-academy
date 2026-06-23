import type { RateCalculatorState } from "./types";

export interface RateResults {
  directLaborBase: number;
  fringeAmount: number;
  fringeRate: number;
  overheadAmount: number;
  overheadRate: number;
  gaAmount: number;
  gaRate: number;
  totalIndirect: number;
  fullyLoadedMultiplier: number;
  fringePct: number;
  overheadPct: number;
  gaPct: number;
  competitiveness: {
    fringe: "green" | "yellow" | "red";
    overhead: "green" | "yellow" | "red";
    ga: "green" | "yellow" | "red";
  };
  priceBuildUp?: {
    directCost: number;
    fringeCost: number;
    overheadCost: number;
    gaCost: number;
    totalCost: number;
    fee: number;
    totalPrice: number;
  };
}

const INDUSTRY_BENCHMARKS = {
  fringe: { low: 0.25, high: 0.38 },
  overhead: { low: 0.08, high: 0.22 },
  ga: { low: 0.08, high: 0.18 },
};

export function calculateRates(state: RateCalculatorState): RateResults {
  const directLaborBase = state.laborCategories.reduce(
    (sum, c) => sum + c.salary * c.quantity,
    0
  );
  const headcount = state.laborCategories.reduce((sum, c) => sum + c.quantity, 0) || 1;
  const avgSalary =
    state.laborCategories.reduce((sum, c) => sum + c.salary * c.quantity, 0) /
    Math.max(headcount, 1);

  const fica = directLaborBase * 0.0765;
  const health = state.fringe.healthInsurance * headcount;
  const dental = state.fringe.dentalVision * headcount;
  const life = state.fringe.lifeInsurance * headcount;
  const match401k = directLaborBase * (state.fringe.match401kPct / 100);
  const ptoPct = (state.fringe.ptoDays / 260) * directLaborBase;
  const workersComp = directLaborBase * (state.fringe.workersCompPct / 100);
  const unemployment = directLaborBase * (state.fringe.unemploymentPct / 100);

  const fringeAmount =
    fica + health + dental + life + match401k + ptoPct + workersComp + unemployment;
  const fringeRate = directLaborBase ? fringeAmount / directLaborBase : 0;

  const overheadAmount =
    state.overhead.rent +
    state.overhead.utilities +
    state.overhead.equipmentSoftware +
    state.overhead.directSupervision;
  const overheadBase = directLaborBase + fringeAmount;
  const overheadRate = overheadBase ? overheadAmount / overheadBase : 0;

  const gaAmount =
    state.ga.executiveSalaries +
    state.ga.accountingFinance +
    state.ga.hr +
    state.ga.itInfrastructure +
    state.ga.businessDevelopment +
    state.ga.legal;
  const gaBase = overheadBase + overheadAmount;
  const gaRate = gaBase ? gaAmount / gaBase : 0;

  const totalIndirect = fringeAmount + overheadAmount + gaAmount;
  const fullyLoadedMultiplier = directLaborBase
    ? (directLaborBase + totalIndirect) / directLaborBase
    : 1;

  const rateComp = (rate: number, bench: { low: number; high: number }) => {
    if (rate <= bench.high * 1.05 && rate >= bench.low * 0.9) return "green" as const;
    if (rate <= bench.high * 1.25) return "yellow" as const;
    return "red" as const;
  };

  const results: RateResults = {
    directLaborBase,
    fringeAmount,
    fringeRate,
    overheadAmount,
    overheadRate,
    gaAmount,
    gaRate,
    totalIndirect,
    fullyLoadedMultiplier,
    fringePct: fringeRate * 100,
    overheadPct: overheadRate * 100,
    gaPct: gaRate * 100,
    competitiveness: {
      fringe: rateComp(fringeRate, INDUSTRY_BENCHMARKS.fringe),
      overhead: rateComp(overheadRate, INDUSTRY_BENCHMARKS.overhead),
      ga: rateComp(gaRate, INDUSTRY_BENCHMARKS.ga),
    },
  };

  if (state.priceBuildUp.categories.length > 0) {
    let directCost = 0;
    for (const row of state.priceBuildUp.categories) {
      const cat = state.laborCategories.find((c) => c.id === row.categoryId);
      if (!cat) continue;
      const hourlyRate = cat.salary / cat.hoursPerYear;
      directCost += hourlyRate * row.hours;
    }
    const fringeCost = directCost * fringeRate;
    const overheadCost = (directCost + fringeCost) * overheadRate;
    const gaCost = (directCost + fringeCost + overheadCost) * gaRate;
    const totalCost = directCost + fringeCost + overheadCost + gaCost;
    const fee = totalCost * (state.priceBuildUp.feePct / 100);
    results.priceBuildUp = {
      directCost,
      fringeCost,
      overheadCost,
      gaCost,
      totalCost,
      fee,
      totalPrice: totalCost + fee,
    };
  }

  return results;
}

export function defaultRateCalculatorState(): RateCalculatorState {
  return {
    laborCategories: [
      { id: "1", name: "Program Manager", salary: 135000, hoursPerYear: 2080, quantity: 1 },
      { id: "2", name: "Senior Analyst", salary: 95000, hoursPerYear: 2080, quantity: 2 },
    ],
    fringe: {
      healthInsurance: 12000,
      dentalVision: 1500,
      lifeInsurance: 400,
      match401kPct: 4,
      ptoDays: 20,
      workersCompPct: 1.2,
      unemploymentPct: 0.6,
    },
    overhead: {
      rent: 48000,
      utilities: 6000,
      equipmentSoftware: 24000,
      directSupervision: 85000,
    },
    ga: {
      executiveSalaries: 180000,
      accountingFinance: 95000,
      hr: 65000,
      itInfrastructure: 42000,
      businessDevelopment: 110000,
      legal: 35000,
    },
    priceBuildUp: {
      categories: [{ categoryId: "1", hours: 520 }, { categoryId: "2", hours: 2080 }],
      feePct: 8,
    },
  };
}

export function exportRatesCsv(state: RateCalculatorState, results: RateResults): string {
  const lines = [
    "GovCon Academy Indirect Rate Calculation",
    "",
    "Labor Category,Salary,Hours/Year,Quantity,Annual Cost",
    ...state.laborCategories.map(
      (c) =>
        `${c.name},${c.salary},${c.hoursPerYear},${c.quantity},${c.salary * c.quantity}`
    ),
    "",
    `Direct Labor Base,${results.directLaborBase.toFixed(2)}`,
    `Fringe Rate,${results.fringePct.toFixed(2)}%`,
    `Overhead Rate,${results.overheadPct.toFixed(2)}%`,
    `G&A Rate,${results.gaPct.toFixed(2)}%`,
    `Fully Loaded Multiplier,${results.fullyLoadedMultiplier.toFixed(4)}`,
  ];
  if (results.priceBuildUp) {
    lines.push(
      "",
      `Total Cost,${results.priceBuildUp.totalCost.toFixed(2)}`,
      `Fee (${state.priceBuildUp.feePct}%),${results.priceBuildUp.fee.toFixed(2)}`,
      `Total Price,${results.priceBuildUp.totalPrice.toFixed(2)}`
    );
  }
  return lines.join("\n");
}
