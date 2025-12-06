'use client';

import { memo } from 'react';
import Link from 'next/link';
import { HEADER_MENU } from '@/data/navigation';

const HeaderDropdown = memo((): JSX.Element => {
  return (
    <div className="absolute top-full left-0 w-[240px] pt-2">
      <div className="bg-white rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] border border-border-light overflow-hidden">
        {HEADER_MENU.dropdown.map((item) => {
          if (item.isHeader) {
            return (
              <div key={item.id} className="px-[16px] py-[10px]">
                <p className="text-text-dark text-[14px] font-bold leading-[1.5]">{item.label}</p>
              </div>
            );
          }
          if (item.label === 'divider') {
            return <div key={item.id} className="h-px bg-border-light w-full"></div>;
          }
          return (
            <div key={item.id} className="px-[16px] py-[10px] hover:bg-gray-50 cursor-pointer">
              <Link href={item.href || '#'} className="text-text-dark text-[14px] font-medium leading-[20px]">
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});

HeaderDropdown.displayName = 'HeaderDropdown';

export default HeaderDropdown;
