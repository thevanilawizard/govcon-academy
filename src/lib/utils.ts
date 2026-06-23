import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUEI(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 12 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export function generateCAGE(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export function getCashColor(cash: number, burn: number): string {
  if (cash > burn * 6) return "text-emerald-600";
  if (cash > burn * 3) return "text-amber-600";
  return "text-red-600";
}

export function getRunwayMonths(cash: number, burn: number, revenue: number): string {
  if (revenue > burn) return "∞";
  const netBurn = burn - revenue;
  if (netBurn <= 0) return "∞";
  return (cash / netBurn).toFixed(1);
}

export function getWinProbColor(prob: number): { color: string; label: string } {
  if (prob > 58) return { color: "text-emerald-600", label: "Strong position — recommend submitting" };
  if (prob >= 34) return { color: "text-amber-600", label: "Competitive — worth bidding if strategic" };
  return { color: "text-red-600", label: "Low odds — consider passing" };
}

export function getCparsLabel(score: number): string {
  if (score >= 4.5) return "Exceptional";
  if (score >= 3.5) return "Very Good";
  if (score >= 2.5) return "Satisfactory";
  if (score >= 1.5) return "Marginal";
  return "Unsatisfactory";
}

export function getCparsColor(score: number): string {
  if (score >= 4.5) return "bg-emerald-100 text-emerald-800";
  if (score >= 3.5) return "bg-green-100 text-green-800";
  if (score >= 2.5) return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
}

export function getPerformanceBarColor(score: number): string {
  if (score >= 4.5) return "bg-emerald-500";
  if (score >= 3.5) return "bg-green-400";
  if (score >= 2.5) return "bg-amber-500";
  return "bg-red-500";
}
