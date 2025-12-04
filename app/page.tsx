"use client";

import AddCardModal from "@/components/cards/AddCardModal";
import CardActionButtons from "@/components/cards/CardActionButtons";
import CardDetailsAccordion from "@/components/cards/CardDetailsAccordion";
import CardsCarousel from "@/components/cards/CardsCarousel";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import TransactionsAccordion from "@/components/transactions/TransactionsAccordion";
import { api } from "@/lib/api";
import { SectionData } from "@/types/api";
import { Card, CardAction, Transaction } from "@/types/card";
import { useEffect, useState } from "react";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("cards");
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [cards, setCards] = useState<Card[]>([]);
  const [cardActions, setCardActions] = useState<CardAction[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        setIsLoading(true);
        const data = await api.get<SectionData>(
          `/api/section?section=${currentSection}`
        );
        setSectionData(data);

        // Merge API cards with localStorage cards and apply frozen status
        if (data.cards) {
          const apiCards = data.cards;
          const localCards =
            typeof window !== "undefined"
              ? JSON.parse(localStorage.getItem("aspire_cards") || "[]")
              : [];

          // Load frozen statuses from localStorage
          const frozenStatuses =
            typeof window !== "undefined"
              ? JSON.parse(localStorage.getItem("aspire_frozen_cards") || "{}")
              : {};

          // Apply frozen status to all cards
          const apiCardsWithFrozen = apiCards.map((card) => ({
            ...card,
            frozen: frozenStatuses[card.id] || false,
          }));

          const mergedCards = [...apiCardsWithFrozen, ...localCards];
          setCards(mergedCards);
        }

        if (data.cardActions) setCardActions(data.cardActions);
        if (data.transactions) setTransactions(data.transactions);
      } catch (error) {
        console.error("Failed to fetch section data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectionData();
  }, [currentSection]);

  const handleNavChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleCtaClick = () => {
    if (sectionData?.header.ctaButton.action === "add-card") {
      setShowModal(true);
    }
  };

  const handleCardAdded = async () => {
    // Refresh the cards section and merge with localStorage
    try {
      const data = await api.get<SectionData>(
        `/api/section?section=${currentSection}`
      );

      if (data.cards) {
        // Merge API cards with localStorage cards and apply frozen status
        const apiCards = data.cards;
        const localCards =
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("aspire_cards") || "[]")
            : [];

        // Load frozen statuses from localStorage
        const frozenStatuses =
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("aspire_frozen_cards") || "{}")
            : {};

        // Apply frozen status to all cards
        const apiCardsWithFrozen = apiCards.map((card) => ({
          ...card,
          frozen: frozenStatuses[card.id] || false,
        }));

        const mergedCards = [...apiCardsWithFrozen, ...localCards];
        setCards(mergedCards);
      }

      if (data.cardActions) setCardActions(data.cardActions);
      if (data.transactions) setTransactions(data.transactions);
    } catch (error) {
      console.error("Failed to refresh cards:", error);
    }
  };

  const handleCardVisibilityToggle = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isVisible: !card.isVisible } : card
      )
    );

    // Update visibility in localStorage if it's a local card
    if (typeof window !== "undefined") {
      const localCards = JSON.parse(
        localStorage.getItem("aspire_cards") || "[]"
      );
      const cardIndex = localCards.findIndex((c: Card) => c.id === cardId);
      if (cardIndex !== -1) {
        localCards[cardIndex].isVisible = !localCards[cardIndex].isVisible;
        localStorage.setItem("aspire_cards", JSON.stringify(localCards));
      }
    }
  };

  const handleActionClick = (action: string) => {
    if (action === "freeze-card") {
      const currentCard = cards[currentCardIndex];
      if (!currentCard) return;

      const newFrozenStatus = !currentCard.frozen;

      // Update card frozen status
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === currentCard.id
            ? { ...card, frozen: newFrozenStatus }
            : card
        )
      );

      // Store frozen status in localStorage
      if (typeof window !== "undefined") {
        const frozenStatuses = JSON.parse(
          localStorage.getItem("aspire_frozen_cards") || "{}"
        );
        frozenStatuses[currentCard.id] = newFrozenStatus;
        localStorage.setItem(
          "aspire_frozen_cards",
          JSON.stringify(frozenStatuses)
        );

        // If it's a user-added card, also update it in aspire_cards
        const localCards = JSON.parse(
          localStorage.getItem("aspire_cards") || "[]"
        );
        const cardIndex = localCards.findIndex(
          (c: Card) => c.id === currentCard.id
        );
        if (cardIndex !== -1) {
          localCards[cardIndex].frozen = newFrozenStatus;
          localStorage.setItem("aspire_cards", JSON.stringify(localCards));
        }
      }
    } else {
      console.log("Action clicked:", action);
    }
  };

  return (
    <div className="flex min-h-screen bg-frost">
      <Sidebar onNavChange={handleNavChange} />
      <div className="flex flex-1 flex-col">
        {isLoading || !sectionData ? (
          <div className="flex items-center justify-center border-b border-border bg-white px-6 py-8">
            <div className="text-muted">Loading...</div>
          </div>
        ) : (
          <Header
            data={sectionData.header}
            onCtaClick={handleCtaClick}
            onTabChange={(index) => console.log("Tab changed:", index)}
          />
        )}

        <main className="flex flex-1 flex-col px-6 py-8">
          {currentSection === "cards" && !isLoading && sectionData && (
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6">
                <CardsCarousel
                  cards={cards}
                  onCardVisibilityToggle={handleCardVisibilityToggle}
                  onCurrentIndexChange={setCurrentCardIndex}
                />
                <CardActionButtons
                  actions={cardActions}
                  onActionClick={handleActionClick}
                  currentCardFrozen={cards[currentCardIndex]?.frozen}
                />
              </div>

              <div className="space-y-6">
                <CardDetailsAccordion />
                <TransactionsAccordion transactions={transactions} />
              </div>
            </div>
          )}
          {currentSection === "cards" && isLoading && (
            <div className="flex h-64 items-center justify-center text-muted">
              Loading...
            </div>
          )}
          {currentSection !== "cards" && !isLoading && (
            <div className="flex h-64 items-center justify-center text-muted">
              {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}{" "}
              section coming soon...
            </div>
          )}
        </main>
      </div>

      <AddCardModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCardAdded={handleCardAdded}
      />
    </div>
  );
}
