'use client';

import { useState, useEffect, useCallback } from 'react';
import { SliderItem } from '@/types';
import SliderCard from './slider/SliderCard';
import SliderNavigation from './slider/SliderNavigation';

interface SliderProps {
  items: SliderItem[];
}

export default function Slider({ items }: SliderProps): JSX.Element {
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

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const getCardStyle = useCallback(
    (index: number) => {
      const position = (index - currentIndex + items.length) % items.length;

      // We need to handle the wrapping correctly for the visual positioning
      // 0 -> Center, 1 -> Right, -1 -> Left (when mapped from end)

      let relativePos = position;
      if (position > items.length / 2) {
        relativePos = position - items.length; // e.g., 3 becomes -1 (left)
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
          boxShadow: '0px 20px 50px rgba(0,0,0,0.1)',
        };
      } else if (relativePos === 1) {
        // Right Card
        return {
          zIndex: 10,
          x: sideOffset,
          opacity: 0.8,
          scale: 0.9,
          filter: 'blur(0px)',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
        };
      } else if (relativePos === -1) {
        // Left Card
        return {
          zIndex: 10,
          x: -sideOffset,
          opacity: 0.8,
          scale: 0.9,
          filter: 'blur(0px)',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
        };
      } else {
        // Hidden/Back Cards
        return {
          zIndex: 0,
          x: 0,
          opacity: 0,
          scale: 0.5,
          filter: 'blur(10px)',
          boxShadow: 'none',
        };
      }
    },
    [currentIndex, items.length, isMobile],
  );

  return (
    <div className="relative w-full max-w-[1000px] mx-auto h-[420px] lg:h-[600px] flex items-start justify-center pt-16 px-12 lg:px-0">
      <div className="relative w-full h-full flex items-start justify-center perspective-1000">
        {items.map((item, index) => {
          const style = getCardStyle(index);
          const isHidden = style.opacity === 0;

          if (isHidden) return null;

          return <SliderCard key={item.id} item={item} style={style} isActive={style.scale === 1} />;
        })}

        <SliderNavigation onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}
