import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy placeholder:text-muted focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/20',
        className
      )}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
