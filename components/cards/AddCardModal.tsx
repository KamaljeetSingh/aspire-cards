"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { api } from "@/lib/api";
import { Card } from "@/types/card";
import { useState } from "react";

interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  onCardAdded?: () => void;
}

export default function AddCardModal({
  open,
  onClose,
  onCardAdded,
}: AddCardModalProps) {
  const [cardholderName, setCardholderName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!cardholderName.trim()) {
      setError("Card name is required");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      // Call API to generate card details
      const response = await api.post<{
        success: boolean;
        message: string;
        card: Card;
      }>("/api/cards/add", {
        cardholderName: cardholderName.trim(),
      });

      if (response.success) {
        // Store the new card in localStorage
        if (typeof window !== "undefined") {
          const storedCards = localStorage.getItem("aspire_cards");
          const cards = storedCards ? JSON.parse(storedCards) : [];
          cards.push(response.card);
          localStorage.setItem("aspire_cards", JSON.stringify(cards));
        }

        setCardholderName("");
        onClose();
        onCardAdded?.();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add card");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCardholderName("");
    setError("");
    onClose();
  };

  return (
    <Modal open={open} title="Create a new card" onClose={handleClose}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-navy">
            Cardholder name
          </label>
          <Input
            placeholder="e.g. Mark Henry"
            value={cardholderName}
            onChange={(event) => setCardholderName(event.target.value)}
            maxLength={26}
            autoFocus
            disabled={isSubmitting}
          />
          <p className="text-xs text-muted">
            The card number and expiration date will be generated automatically.
          </p>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" variant="navy" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create card"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
