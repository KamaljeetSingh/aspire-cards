import { clsx } from 'clsx';

interface AvatarProps {
  label: string;
  color?: string;
  size?: 'sm' | 'md';
}

export default function Avatar({ label, color = '#C4C4C4', size = 'md' }: AvatarProps) {
  const initials = label
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  const dimension = size === 'md' ? '40px' : '32px';

  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full text-sm font-semibold text-white'
      )}
      style={{ backgroundColor: color, width: dimension, height: dimension }}
    >
      {initials}
    </div>
  );
}
