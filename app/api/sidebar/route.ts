import { SidebarData } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET() {
  const sidebarData: SidebarData = {
    logo: {
      src: "/assets/Logo.png",
      alt: "Aspire Logo",
    },
    tagline: "Trusted way of banking for 3,000+ SMEs and startups in Singapore",
    navItems: [
      { label: "Home", icon: "/assets/Home.png", active: false },
      { label: "Cards", icon: "/assets/Card.png", active: true },
      { label: "Payments", icon: "/assets/Payments.png", active: false },
      { label: "Credit", icon: "/assets/Credit.png", active: false },
      { label: "Settings", icon: "/assets/Account.png", active: false },
    ],
  };

  return NextResponse.json(sidebarData);
}
