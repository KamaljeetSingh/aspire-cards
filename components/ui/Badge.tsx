import { clsx } from 'clsx';

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'yellow' | 'green' | 'blue';
}

const colors = {
  yellow: 'bg-amber-400 text-white',
  green: 'bg-primary text-white',
  blue: 'bg-azure text-white'
};

export default function Badge({
  children,
  className,
  color = 'yellow'
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full text-xs font-semibold',
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
