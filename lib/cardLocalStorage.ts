import { Card } from "@/types/card";

const STORAGE_KEY = "aspire_cards";

export const cardLocalStorage = {
  // Get all cards from localStorage
  getCards(): Card[] {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading cards from localStorage:", error);
      return [];
    }
  },

  // Add a new card to localStorage
  addCard(card: Card): void {
    if (typeof window === "undefined") return;

    try {
      const cards = this.getCards();
      cards.push(card);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch (error) {
      console.error("Error saving card to localStorage:", error);
    }
  },

  // Update a card in localStorage
  updateCard(cardId: string, updates: Partial<Card>): void {
    if (typeof window === "undefined") return;

    try {
      const cards = this.getCards();
      const index = cards.findIndex((c) => c.id === cardId);
      if (index !== -1) {
        cards[index] = { ...cards[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
      }
    } catch (error) {
      console.error("Error updating card in localStorage:", error);
    }
  },

  // Get a specific card by ID
  getCardById(cardId: string): Card | undefined {
    return this.getCards().find((card) => card.id === cardId);
  },

  // Clear all cards from localStorage
  clear(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
  },
};
