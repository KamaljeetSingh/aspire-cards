import { MegaphoneIcon, PlaneIcon, StoreIcon } from "@/components/icons";
import Panel from "@/components/ui/Panel";
import { transactions } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Card } from "@/types/card";

const categoryIcon = {
  shopping: StoreIcon,
  travel: PlaneIcon,
  food: MegaphoneIcon,
  other: StoreIcon,
};

interface RecentTransactionsProps {
  card?: Card;
}

export default function RecentTransactions({ card }: RecentTransactionsProps) {
  const filtered = card
    ? transactions.filter((txn) => txn.cardId === card.id).slice(0, 5)
    : transactions.slice(0, 5);

  return (
    <Panel title="Recent transactions" className="p-4">
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-4 text-sm text-muted">
          No transactions for this card yet.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((txn) => {
            const Icon =
              categoryIcon[txn.category as keyof typeof categoryIcon];
            const positive = txn.amount > 0;
            return (
              <div
                key={txn.id}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-3"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    positive
                      ? "bg-emerald-50 text-primary"
                      : "bg-sky-100 text-azure"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-navy">
                        {txn.merchant}
                      </div>
                      <div className="text-xs text-muted">
                        {formatDate(txn.date)}
                      </div>
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        positive ? "text-primary" : "text-navy"
                      }`}
                    >
                      {positive ? "+" : "-"}{" "}
                      {formatCurrency(Math.abs(txn.amount))}
                    </div>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-muted">
                    {txn.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Panel>
  );
}
