'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SliderItem } from '@/types';

interface SliderProps {
  items: SliderItem[];
}

export default function Slider({ items }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + items.length) % items.length;

    // We need to handle the wrapping correctly for the visual positioning
    // Let's define relative positions: 0 (active), 1 (next), -1 (prev)
    // Since we have 4 items, we can map them:
    // 0 -> Center
    // 1 -> Right
    // 2 -> Back/Hidden (or far right/left)
    // 3 -> Left (which is -1)

    let relativePos = position;
    if (position > items.length / 2) {
      relativePos = position - items.length; // e.g., 3 becomes -1
    }

    // Responsive offset: tighter on mobile, original on desktop
    const sideOffset = isMobile ? 50 : 120;

    if (relativePos === 0) {
      // Active Card
      return {
        zIndex: 20,
        x: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        boxShadow: '0px 20px 50px rgba(0,0,0,0.1)'
      };
    } else if (relativePos === 1) {
      // Right Card
      return {
        zIndex: 10,
        x: sideOffset,
        opacity: 0.8, // Lighter, more visible
        scale: 0.9,
        filter: 'blur(0px)',
        boxShadow: '0px 10px 30px rgba(0,0,0,0.05)'
      };
    } else if (relativePos === -1) {
      // Left Card
      return {
        zIndex: 10,
        x: -sideOffset, // More centered for nav space
        opacity: 0.8, // Lighter, more visible
        scale: 0.9,
        filter: 'blur(0px)',
        boxShadow: '0px 10px 30px rgba(0,0,0,0.05)'
      };
    } else {
      // Hidden/Back Cards
      return {
        zIndex: 0,
        x: 0,
        opacity: 0,
        scale: 0.5,
        filter: 'blur(10px)',
        boxShadow: 'none'
      };
    }
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto h-[460px] lg:h-[600px] flex items-start justify-center pt-8 px-12 lg:px-0">
      <div className="relative w-full h-full flex items-start justify-center perspective-1000">
        {items.map((item, index) => {
          const style = getCardStyle(index);
          const isHidden = style.opacity === 0;
          const isActive = style.scale === 1;

          if (isHidden) return null;

          return (
            <motion.div
              key={item.id}
              className="absolute bg-white rounded-[12px] p-[16px] lg:p-[36px] shadow-[0px_15px_24px_rgba(0,0,0,0.12)] w-[240px] lg:w-[292px] flex flex-col items-center text-center gap-[16px]"
              initial={false}
              animate={style}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Tooltip for Active Card - FadeIn with card (500ms) */}
              {isActive && (
                <div className="absolute -top-16 left-0 right-0 flex justify-center pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#E9F7EF] px-[16px] py-[8px] rounded-[8px] shadow-lg flex items-center gap-[10px] whitespace-nowrap pointer-events-auto"
                  >
                    <div className="w-[26px] h-[26px] rounded-full bg-[#E9F7EF] flex items-center justify-center text-[#00C696] shrink-0">
                      <span className="font-bold text-sm">$</span>
                    </div>
                    <span className="text-[#00C696] font-black text-[18px]">월 100만원</span>
                    {/* Tooltip Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#E9F7EF]"></div>
                  </motion.div>
                </div>
              )}

              {/* Avatar and Info */}
              <div className="flex flex-col items-center gap-[16px]">
                <div className="relative">
                  <img src={item.avatar} alt={item.name} className="w-[64px] h-[64px] lg:w-[120px] lg:h-[120px] rounded-full object-cover" />
                  <div className="absolute bottom-0 right-0">
                    <span className="text-base lg:text-2xl drop-shadow-md">{item.flags[0]}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center leading-[1.5]">
                  <h3 className="text-[18px] lg:text-[24px] font-black text-[#1D1D25] mb-0">{item.name}</h3>
                  <p className="text-[#4A77FF] font-black text-[14px] lg:text-[16px]">
                    {item.role} · {item.experience}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-[4px] items-center">
                <div className="flex gap-[4px]">
                  <span className="px-[12px] py-[4px] rounded-[6px] border border-[#C1C5CF] text-[#5E626F] text-[14px] lg:text-[16px] font-black whitespace-nowrap">마케팅 콘텐츠 제작</span>
                </div>
                <div className="flex gap-[4px]">
                  <span className="px-[12px] py-[4px] rounded-[6px] border border-[#C1C5CF] text-[#5E626F] text-[14px] lg:text-[16px] font-black whitespace-nowrap">인스타그램 관리</span>
                </div>
                <div className="flex gap-[4px]">
                  <span className="px-[12px] py-[4px] rounded-[6px] border border-[#C1C5CF] text-[#5E626F] text-[14px] lg:text-[16px] font-black whitespace-nowrap">트위터 관리</span>
                  <span className="px-[12px] py-[4px] rounded-[6px] border border-[#C1C5CF] text-[#5E626F] text-[14px] lg:text-[16px] font-black whitespace-nowrap">블로그 글 작성</span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Navigation Arrows - Positioned relative to cards */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
          className="absolute left-0 lg:left-10 top-[calc(2rem+180px)] lg:top-[calc(2rem+200px)] text-white/90 hover:text-white hover:scale-110 transition-all z-30"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[32px] lg:h-[32px]">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
          className="absolute right-0 lg:right-10 top-[calc(2rem+180px)] lg:top-[calc(2rem+200px)] text-white/90 hover:text-white hover:scale-110 transition-all z-30"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-[32px] lg:h-[32px]">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
