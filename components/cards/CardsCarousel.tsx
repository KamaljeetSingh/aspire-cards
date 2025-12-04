"use client";

import { Card } from "@/types/card";
import { clsx } from "clsx";
import { useState } from "react";
import CardItem from "./CardItem";

type CardsCarouselProps = {
  cards: Card[];
  onCardVisibilityToggle?: (cardId: string) => void;
  onCurrentIndexChange?: (index: number) => void;
};

export default function CardsCarousel({
  cards,
  onCardVisibilityToggle,
  onCurrentIndexChange,
}: CardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
    onCurrentIndexChange?.(index);
  };

  if (!cards || cards.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center text-muted">
        No cards available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <CardItem
          card={cards[currentIndex]}
          onToggleVisibility={() =>
            onCardVisibilityToggle?.(cards[currentIndex].id)
          }
        />
      </div>

      {cards.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndexChange(index)}
              className={clsx(
                "h-2 rounded-full transition-all",
                index === currentIndex
                  ? "w-8 bg-[#01D167]"
                  : "w-2 bg-[#01D167]/30"
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
