import { HeaderData } from "@/types/api";
import { Card, CardAction, Transaction } from "@/types/card";
import { NextRequest, NextResponse } from "next/server";

type SectionResponse = {
  header: HeaderData;
  cards?: Card[];
  cardActions?: CardAction[];
  transactions?: Transaction[];
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const section = searchParams.get("section") || "cards";

  // Default cards (client will merge with localStorage cards)
  const defaultCards: Card[] = [
    {
      id: "card-1",
      cardholderName: "Mark Henry",
      cardNumber: "1234567890122020",
      expiryDate: "12/20",
      cvv: "***",
      cardType: "visa",
      cardLogo: "/assets/Visa Logo.png",
      isVisible: false,
    },
    {
      id: "card-2",
      cardholderName: "Sarah Connor",
      cardNumber: "9876543210982021",
      expiryDate: "09/21",
      cvv: "***",
      cardType: "visa",
      cardLogo: "/assets/Visa Logo.png",
      isVisible: false,
    },
    {
      id: "card-3",
      cardholderName: "John Doe",
      cardNumber: "5555444433332022",
      expiryDate: "06/22",
      cvv: "***",
      cardType: "visa",
      cardLogo: "/assets/Visa Logo.png",
      isVisible: false,
    },
  ];

  const allCards = defaultCards;

  const sectionData: Record<string, SectionResponse> = {
    home: {
      header: {
        title: "Available balance",
        balance: 3000,
        currency: "S$",
        ctaButton: {
          label: "New transaction",
          action: "add-transaction",
        },
        tabs: [
          { label: "My transactions", active: true },
          { label: "All transactions", active: false },
        ],
      },
    },
    cards: {
      header: {
        title: "Available balance",
        balance: 3000,
        currency: "S$",
        ctaButton: {
          label: "New card",
          action: "add-card",
        },
        tabs: [
          { label: "My debit cards", active: true },
          { label: "All company cards", active: false },
        ],
      },
      cards: allCards,
      cardActions: [
        {
          id: "freeze",
          label: "Freeze card",
          icon: "/assets/Freeze card.png",
          action: "freeze-card",
        },
        {
          id: "spend-limit",
          label: "Set spend limit",
          icon: "/assets/Set spend limit.png",
          action: "set-spend-limit",
        },
        {
          id: "gpay",
          label: "Add to GPay",
          icon: "/assets/GPay.png",
          action: "add-to-gpay",
        },
        {
          id: "replace",
          label: "Replace card",
          icon: "/assets/Replace card.png",
          action: "replace-card",
        },
        {
          id: "cancel",
          label: "Cancel card",
          icon: "/assets/Deactivate card.png",
          action: "cancel-card",
        },
      ],
      transactions: [
        {
          id: "txn-1",
          merchant: "Hamleys",
          date: "20 May 2020",
          amount: 150,
          type: "credit",
          icon: "/assets/file-storage.png",
          iconBgColor: "#E8F4FD",
          status: "Refund on debit card",
          statusIcon: "/assets/business-and-finance.png",
        },
        {
          id: "txn-2",
          merchant: "Hamleys",
          date: "20 May 2020",
          amount: -150,
          type: "debit",
          icon: "/assets/flights.png",
          iconBgColor: "#E8F8F2",
          status: "Charged to debit card",
          statusIcon: "/assets/business-and-finance.png",
        },
        {
          id: "txn-3",
          merchant: "Hamleys",
          date: "20 May 2020",
          amount: -150,
          type: "debit",
          icon: "/assets/megaphone.png",
          iconBgColor: "#FEE8F4",
          status: "Charged to debit card",
          statusIcon: "/assets/business-and-finance.png",
        },
        {
          id: "txn-4",
          merchant: "Hamleys",
          date: "20 May 2020",
          amount: -150,
          type: "debit",
          icon: "/assets/file-storage.png",
          iconBgColor: "#E8F4FD",
          status: "Charged to debit card",
          statusIcon: "/assets/business-and-finance.png",
        },
      ],
    },
    payments: {
      header: {
        title: "Available balance",
        balance: 3000,
        currency: "S$",
        ctaButton: {
          label: "New payment",
          action: "add-payment",
        },
        tabs: [
          { label: "Recent payments", active: true },
          { label: "All payments", active: false },
        ],
      },
    },
    credit: {
      header: {
        title: "Available credit",
        balance: 5000,
        currency: "S$",
        ctaButton: {
          label: "Apply credit",
          action: "apply-credit",
        },
        tabs: [
          { label: "My credit", active: true },
          { label: "Credit history", active: false },
        ],
      },
    },
    settings: {
      header: {
        title: "Settings",
        balance: 0,
        currency: "",
        ctaButton: {
          label: "Save changes",
          action: "save-settings",
        },
        tabs: [
          { label: "Profile", active: true },
          { label: "Security", active: false },
        ],
      },
    },
  };

  const data = sectionData[section.toLowerCase()] || sectionData.cards;

  return NextResponse.json(data);
}
