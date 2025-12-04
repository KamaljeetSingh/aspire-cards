"use client";

import Image from "@/components/ui/Image";
import { ChevronRight } from "@/components/icons";
import { Transaction } from "@/types/card";
import { clsx } from "clsx";
import { useState } from "react";

type TransactionsAccordionProps = {
  transactions: Transaction[];
  className?: string;
};

export default function TransactionsAccordion({
  transactions,
  className,
}: TransactionsAccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={clsx("rounded-xl bg-white shadow-card", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/assets/business-and-finance-2.png"
            alt="Recent transactions"
            className="h-6 w-6"
          />
          <span className="text-base font-medium text-navy">
            Recent transactions
          </span>
        </div>
        <ChevronRight
          className={clsx(
            "h-5 w-5 text-navy transition-transform",
            isOpen ? "rotate-90" : ""
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border">
          <div className="divide-y divide-border">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: transaction.iconBgColor }}
                    >
                      <Image
                        src={transaction.icon}
                        alt={transaction.merchant}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-navy">
                        {transaction.merchant}
                      </div>
                      <div className="text-xs text-muted">
                        {transaction.date}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <Image
                          src={transaction.statusIcon}
                          alt="Status"
                          className="h-3 w-3"
                        />
                        <span className="text-xs font-medium text-[#325BAF]">
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={clsx(
                        "text-base font-bold",
                        transaction.type === "credit"
                          ? "text-[#01D167]"
                          : "text-navy"
                      )}
                    >
                      {transaction.type === "credit" ? "+" : "-"} S${" "}
                      {Math.abs(transaction.amount)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4">
            <button className="w-full rounded-lg bg-[#EDFFF5] py-3 text-center text-sm font-medium text-[#01D167] transition-opacity hover:opacity-80">
              View all card transactions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
