import { clsx } from 'clsx';

interface ProgressProps {
  value: number;
  max?: number;
}

export default function Progress({ value, max = 100 }: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="h-2 rounded-full bg-border">
      <div
        className={clsx('h-2 rounded-full bg-azure transition-all')}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
