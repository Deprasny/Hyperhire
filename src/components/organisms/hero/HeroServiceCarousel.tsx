'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { HERO_SERVICES } from '@/data/services';

export default function HeroServiceCarousel(): JSX.Element {
  const [serviceIndex, setServiceIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:block relative z-10 overflow-hidden pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative overflow-hidden">
          <div
            className="flex gap-[10px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${serviceIndex * 342}px)` }}>
            {/* Show services twice for smooth infinite loop */}
            {HERO_SERVICES.concat(HERO_SERVICES).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 rounded-[12px] p-[16px] flex items-center gap-[24px] w-[332px] cursor-pointer hover:bg-white/25 transition-colors shrink-0">
                <div className="bg-white/40 p-[12px] rounded-[8px] shrink-0">
                  <div className="w-[32px] h-[32px] flex items-center justify-center relative">
                    <NextImage
                      src={`/images/card/${item.icon}`}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                </div>
                <p className="font-black text-[24px] text-white leading-[1.5]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
