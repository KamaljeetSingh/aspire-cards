"use client";

import Image from "@/components/ui/Image";
import { api } from "@/lib/api";
import { SidebarData } from "@/types/api";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

type SidebarProps = {
  onNavChange?: (section: string) => void;
};

export default function Sidebar({ onNavChange }: SidebarProps) {
  const [sidebarData, setSidebarData] = useState<SidebarData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        setIsLoading(true);
        const data = await api.get<SidebarData>("/api/sidebar");
        setSidebarData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load sidebar");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSidebarData();
  }, []);

  if (isLoading) {
    return (
      <aside className="hidden h-screen w-64 flex-shrink-0 flex-col justify-between bg-[#0C365A] px-6 pb-8 pt-10 text-white lg:flex">
        <div className="flex items-center justify-center h-full">
          <div className="text-[#FFFFFF]/60">Loading...</div>
        </div>
      </aside>
    );
  }

  if (error || !sidebarData) {
    return (
      <aside className="hidden h-screen w-64 flex-shrink-0 flex-col justify-between bg-[#0C365A] px-6 pb-8 pt-10 text-white lg:flex">
        <div className="flex items-center justify-center h-full">
          <div className="text-red-400">
            {error || "Failed to load sidebar"}
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden h-screen w-64 flex-shrink-0 flex-col justify-between bg-[#0C365A] px-6 pb-8 pt-10 text-white lg:flex">
      <div className="space-y-10">
        <div className="flex items-center gap-3">
          <Image
            src={sidebarData.logo.src}
            alt={sidebarData.logo.alt}
            className="h-[35px] w-[125px]"
          />
        </div>
        <p className="text-sm leading-relaxed text-[#FFFFFF]/60">
          {sidebarData.tagline}
        </p>
        <nav className="space-y-1">
          {sidebarData.navItems.map((item) => {
            return (
              <button
                key={item.label}
                onClick={() => onNavChange?.(item.label.toLowerCase())}
                className={clsx(
                  "flex w-full items-center gap-4 rounded-lg px-4 py-3 text-base font-medium transition-all",
                  item.active
                    ? "text-[#01D167]"
                    : "text-[#FFFFFF] hover:bg-[#FFFFFF]/5"
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  className={clsx(
                    "h-6 w-6 object-contain",
                    item.active ? "" : "opacity-90"
                  )}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
