import { Card } from "@/types/card";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cardholderName } = body;

    if (!cardholderName || !cardholderName.trim()) {
      return NextResponse.json(
        { error: "Cardholder name is required" },
        { status: 400 }
      );
    }

    // Auto-generate card number (16 digits)
    const cardNumber = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    // Auto-generate expiry date (2-3 years from now)
    const currentDate = new Date();
    const expiryYear = currentDate.getFullYear() + 2;
    const expiryMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const expiryDate = `${expiryMonth}/${expiryYear.toString().slice(-2)}`;

    // Generate CVV
    const cvv = "***";

    // Create new card (client will store in localStorage)
    const newCard: Card = {
      id: `card-${Date.now()}`,
      cardholderName: cardholderName.trim(),
      cardNumber,
      expiryDate,
      cvv,
      cardType: "visa",
      cardLogo: "/assets/Visa Logo.png",
      isVisible: false,
    };

    return NextResponse.json({
      success: true,
      message: "Card added successfully",
      card: newCard,
    });
  } catch (error) {
    console.error("Error adding card:", error);
    return NextResponse.json({ error: "Failed to add card" }, { status: 500 });
  }
}
