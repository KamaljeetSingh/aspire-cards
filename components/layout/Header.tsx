"use client";

import Button from "@/components/ui/Button";
import { PlusIcon } from "@/components/icons";
import { HeaderData } from "@/types/api";
import { clsx } from "clsx";

type HeaderProps = {
  data: HeaderData;
  onCtaClick: () => void;
  onTabChange?: (tabIndex: number) => void;
};

export default function Header({ data, onCtaClick, onTabChange }: HeaderProps) {
  return (
    <header className="border-b border-border bg-white">
      <div className="flex items-center justify-between px-6 py-6">
        <div>
          <div className="text-sm font-medium text-muted mb-2">
            {data.title}
          </div>
          <div className="flex items-center gap-3">
            {data.currency && (
              <span className="rounded-md bg-[#01D167] px-3 py-1.5 text-sm font-bold text-white">
                {data.currency}
              </span>
            )}
            <span className="text-3xl font-bold text-navy">
              {data.balance.toLocaleString("en-SG")}
            </span>
          </div>
        </div>
        <Button
          variant="navy"
          onClick={onCtaClick}
          className="rounded-xl px-6 py-3"
        >
          <PlusIcon className="h-5 w-5" />
          {data.ctaButton.label}
        </Button>
      </div>

      {data.tabs && data.tabs.length > 0 && (
        <div className="flex gap-8 px-6">
          {data.tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => onTabChange?.(index)}
              className={clsx(
                "relative pb-4 text-base font-medium transition-colors",
                tab.active
                  ? "text-[#01D167]"
                  : "text-muted hover:text-navy"
              )}
            >
              {tab.label}
              {tab.active && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#23CEFD] rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

