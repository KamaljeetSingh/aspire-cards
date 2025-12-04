"use client";

import Image from "@/components/ui/Image";
import { Card } from "@/types/card";
import { clsx } from "clsx";

type CardItemProps = {
  card: Card;
  onToggleVisibility?: () => void;
};

export default function CardItem({ card, onToggleVisibility }: CardItemProps) {
  const formatCardNumber = (number: string, isVisible: boolean) => {
    if (!isVisible) {
      return (
        <>
          <span>•••• •••• ••••</span> <span>{number.slice(-4)}</span>
        </>
      );
    }
    return number.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onToggleVisibility}
        className="mb-4 flex items-center gap-2 text-sm font-medium text-[#01D167] transition-opacity hover:opacity-80"
      >
        <Image
          src="/assets/remove_red_eye-24px.png"
          alt="Show card"
          className="h-5 w-5"
        />
        <span>{card.isVisible ? "Hide" : "Show"} card number</span>
      </button>

      <div
        className={clsx(
          "relative h-[240px] w-full max-w-[400px] rounded-xl p-6 text-white shadow-card transition-all",
          card.frozen
            ? "bg-gradient-to-br from-gray-400 to-gray-500"
            : "bg-gradient-to-br from-[#01D167] to-[#01B85A]"
        )}
      >
        <div className="mb-8 flex items-center justify-end">
          <Image
            src="/assets/Logo.png"
            alt="Aspire"
            className="h-[20px] w-[70px]"
          />
        </div>

        <div className="mb-6 text-2xl font-bold">{card.cardholderName}</div>

        <div className="mb-6 flex items-center gap-4 text-lg font-medium tracking-wider">
          {formatCardNumber(card.cardNumber, card.isVisible)}
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-8 text-sm">
            <div>
              <div className="mb-1 text-xs opacity-80">
                Thru: {card.expiryDate}
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs opacity-80">
                CVV: <span className="text-base">{card.cvv}</span>
              </div>
            </div>
          </div>
          <Image
            src={card.cardLogo}
            alt={card.cardType}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
