export type CardStatus = 'active' | 'frozen';

export type CardNetwork = 'visa' | 'mastercard';

export interface Card {
  id: string;
  holderName: string;
  number: string;
  expiry: string;
  cvv: string;
  status: CardStatus;
  network: CardNetwork;
  availableBalance: number;
}

export interface Transaction {
  id: string;
  cardId: string;
  merchant: string;
  date: string;
  amount: number;
  currency: string;
  category: 'travel' | 'shopping' | 'food' | 'other';
  description: string;
}

export interface Comment {
  id: string;
  author: string;
  avatarColor?: string;
  role?: string;
  date: string;
  message: string;
  badge?: number;
  edited?: boolean;
}
