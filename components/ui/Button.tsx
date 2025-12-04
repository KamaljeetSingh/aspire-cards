import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'outline' | 'ghost' | 'navy';
type Size = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  block?: boolean;
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm'
};

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-emerald-500',
  outline:
    'border border-border text-azure hover:border-azure hover:text-azure/90 bg-white',
  ghost: 'text-slate hover:text-navy hover:bg-frost',
  navy: 'bg-azure text-white hover:bg-azure/90'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', block, className, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-azure/30 disabled:opacity-50 disabled:cursor-not-allowed',
        sizes[size],
        variants[variant],
        block && 'w-full',
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export default Button;
