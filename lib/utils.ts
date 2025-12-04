import { Card } from "@/types/index";

export const formatCurrency = (amount: number, currency = "SGD") => {
  const sign = amount >= 0 ? "" : "- ";
  const value = Math.abs(amount).toLocaleString("en-SG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `${sign}S$ ${value}`;
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export const chunkCardNumber = (number: string) =>
  number.match(/.{1,4}/g)?.join(" ") ?? number;

export const maskNumber = (number: string) => {
  const groups = chunkCardNumber(number).split(" ");
  return groups
    .map((group, index) => (index === groups.length - 1 ? group : "••••"))
    .join(" ");
};

export const createCard = (
  holderName: string,
  template?: Partial<Card>
): Card => {
  const digits = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(24 + Math.floor(Math.random() * 4));
  return {
    id: `card-${Date.now()}`,
    holderName,
    number: digits,
    expiry: `${month}/${year}`,
    cvv: String(Math.floor(Math.random() * 900) + 100),
    status: "active",
    network: Math.random() > 0.3 ? "visa" : "mastercard",
    availableBalance: Math.floor(Math.random() * 4000) + 500,
    ...template,
  };
};
