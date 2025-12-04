import { clsx } from 'clsx';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  rightAction?: React.ReactNode;
}

export default function Panel({
  children,
  className,
  title,
  rightAction
}: PanelProps) {
  return (
    <section
      className={clsx(
        'rounded-2xl bg-white p-5 shadow-card ring-1 ring-border/70',
        className
      )}
    >
      {(title || rightAction) && (
        <header className="mb-4 flex items-center justify-between">
          {title && <h3 className="text-base font-semibold text-navy">{title}</h3>}
          {rightAction}
        </header>
      )}
      {children}
    </section>
  );
}
