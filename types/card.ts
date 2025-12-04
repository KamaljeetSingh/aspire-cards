export type Card = {
  id: string;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardType: "visa" | "mastercard";
  cardLogo: string;
  isVisible: boolean;
  frozen?: boolean;
};

export type CardAction = {
  id: string;
  label: string;
  icon: string;
  action: string;
};

export type Transaction = {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  icon: string;
  iconBgColor: string;
  status: string;
  statusIcon: string;
};

export type CardDetailsItem = {
  label: string;
  value: string;
};
