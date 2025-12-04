import { Card, CardAction, Transaction } from "./card";

export type NavItem = {
  label: string;
  icon: string;
  active: boolean;
};

export type SidebarData = {
  logo: {
    src: string;
    alt: string;
  };
  tagline: string;
  navItems: NavItem[];
};

export type Tab = {
  label: string;
  active: boolean;
};

export type HeaderData = {
  title: string;
  balance: number;
  currency: string;
  ctaButton: {
    label: string;
    action: string;
  };
  tabs: Tab[];
};

export type SectionData = {
  header: HeaderData;
  cards?: Card[];
  cardActions?: CardAction[];
  transactions?: Transaction[];
};
