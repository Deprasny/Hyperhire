import { memo } from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = memo(({ children, className = '' }: BadgeProps): JSX.Element => {
  return (
    <div className={clsx('bg-badge-bg lg:bg-white px-[12px] py-[6px] rounded-[8px] shadow-md', className)}>
      <span className="text-white lg:text-badge-text font-black text-[18px] leading-[1.5]">{children}</span>
    </div>
  );
});

Badge.displayName = 'Badge';

export default Badge;
