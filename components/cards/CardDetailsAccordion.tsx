"use client";

import Image from "@/components/ui/Image";
import { ChevronRight } from "@/components/icons";
import { clsx } from "clsx";
import { useState } from "react";

type CardDetailsAccordionProps = {
  className?: string;
};

export default function CardDetailsAccordion({
  className,
}: CardDetailsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("rounded-xl bg-white shadow-card", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/assets/business-and-finance-1.png"
            alt="Card details"
            className="h-6 w-6"
          />
          <span className="text-base font-medium text-navy">Card details</span>
        </div>
        <ChevronRight
          className={clsx(
            "h-5 w-5 text-navy transition-transform",
            isOpen ? "rotate-90" : ""
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border px-6 py-4">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Name on card</span>
              <span className="font-medium text-navy">Mark Henry</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Card number</span>
              <span className="font-medium text-navy">•••• 2020</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Expiry date</span>
              <span className="font-medium text-navy">12/20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">CVV</span>
              <span className="font-medium text-navy">***</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

