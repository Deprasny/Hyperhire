'use client';

import { useState } from 'react';
import Link from 'next/link';
import ChevronIcon from '@/components/atoms/icons/ChevronIcon';
import MenuIcon from '@/components/atoms/icons/MenuIcon';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import MobileMenu from '@/components/molecules/MobileMenu';
import HeaderDropdown from '@/components/molecules/HeaderDropdown';

export default function Header(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="hyperhire" width={114} height={32} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white font-bold">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              className="flex items-center gap-1 cursor-pointer"
              aria-label="채용 메뉴 열기"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true">
              채용
              <ChevronIcon direction="down" width={16} height={16} />
            </button>

            {isDropdownOpen && <HeaderDropdown />}
          </div>

          <Link href="#" className="hover:opacity-80 transition-opacity">
            해외 개발자 활용 서비스
          </Link>
        </nav>

        <Button variant="white" className="hidden text-card-role md:block">
          문의하기
        </Button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
}
