"use client";

import Image from "@/components/ui/Image";
import { CardAction } from "@/types/card";

type CardActionButtonsProps = {
  actions: CardAction[];
  onActionClick?: (action: string) => void;
  currentCardFrozen?: boolean;
};

export default function CardActionButtons({
  actions,
  onActionClick,
  currentCardFrozen = false,
}: CardActionButtonsProps) {
  return (
    <div className="rounded-xl bg-[#EDF3FF] px-6 py-6">
      <div className="flex items-center justify-between gap-4">
        {actions.map((action) => {
          const isFreezeAction = action.action === "freeze-card";
          const displayLabel = isFreezeAction
            ? currentCardFrozen
              ? "Unfreeze card"
              : action.label
            : action.label;

          return (
            <button
              key={action.id}
              onClick={() => onActionClick?.(action.action)}
              className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Image
                  src={action.icon}
                  alt={displayLabel}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-center text-xs font-medium text-navy leading-tight">
                {displayLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
