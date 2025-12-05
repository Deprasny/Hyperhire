'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl tracking-tight">hyperhire</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white font-bold">
          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              채용
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Content - Matches Figma node 4:17415 */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] border border-[#F2F4F7] overflow-hidden w-[240px]">
                {/* Section 1 - Header */}
                <div className="px-[16px] py-[10px]">
                  <p className="text-[#344054] text-[14px] font-bold leading-[1.5]">채용</p>
                </div>

                {/* Section 2 - Menu Items */}
                <div className="px-[16px] py-[10px] hover:bg-gray-50 cursor-pointer">
                  <p className="text-[#344054] text-[14px] font-medium leading-[20px]">해외 개발자 원격 채용</p>
                </div>
                <div className="px-[16px] py-[10px] hover:bg-gray-50 cursor-pointer">
                  <p className="text-[#344054] text-[14px] font-medium leading-[20px]">외국인 원격 채용 (비개발 직군)</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#F2F4F7] w-full"></div>

                {/* Section 3 - Additional Items */}
                <div className="px-[16px] py-[10px] hover:bg-gray-50 cursor-pointer">
                  <p className="text-[#344054] text-[14px] font-medium leading-[20px]">한국어 가능 외국인 채용</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#F2F4F7] w-full"></div>
              </div>
            )}
          </div>

          <Link href="#" className="hover:opacity-80 transition-opacity">해외 개발자 활용 서비스</Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-white text-point-blue px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
          문의하기
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-4 text-blue-gray-80 font-medium">
            <Link href="#">채용</Link>
            <Link href="#">해외 개발자 활용 서비스</Link>
            <button className="bg-point-blue text-white px-6 py-2 rounded-lg font-bold">
              문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
