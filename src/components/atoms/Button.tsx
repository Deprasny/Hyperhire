import { memo } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'white' | 'ghost';
  children: React.ReactNode;
}

const Button = memo(({ variant = 'primary', className = '', children, ...props }: ButtonProps): JSX.Element => {
  const baseStyles = 'font-bold rounded-lg transition-colors duration-200';

  const variants = {
    primary: 'bg-point-blue text-white px-6 py-2 hover:bg-opacity-90',
    white: 'bg-white text-point-blue px-6 py-2 hover:bg-opacity-90',
    ghost: 'text-white hover:opacity-80',
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
