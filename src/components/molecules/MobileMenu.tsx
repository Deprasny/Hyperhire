'use client';

import { memo } from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import { HEADER_MENU } from '@/data/navigation';

const MobileMenu = memo((): JSX.Element => {
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-gradient-start to-gradient-end p-6 shadow-lg z-50 rounded-b-xl">
      <div className="flex flex-col gap-6 font-medium">
        {HEADER_MENU.main.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <Link href={item.href} className="text-white text-[16px] font-bold">
              {item.label}
            </Link>

            {/* Render Sub-menu for Recruitment */}
            {item.hasDropdown && (
              <div className="flex flex-col gap-4">
                {HEADER_MENU.dropdown.map((subItem) => {
                  if (subItem.isHeader) return null; // Skip header in mobile
                  if (subItem.label === 'divider') return null; // Skip dividers in mobile for cleaner look

                  return (
                    <Link key={subItem.id} href={subItem.href || '#'} className="text-white/90 text-[15px] font-medium">
                      {subItem.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
        <div className="pt-2">
          <Button variant="white" className="w-full justify-center text-primary font-bold">
            문의하기
          </Button>
        </div>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
