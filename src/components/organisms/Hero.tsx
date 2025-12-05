'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';
import Header from './Header';
import { HeroData, SliderItem } from '@/types';

interface HeroProps {
  data: HeroData;
  sliderItems: SliderItem[];
}

export default function Hero({ data, sliderItems }: HeroProps) {
  const [serviceIndex, setServiceIndex] = useState(0);

  const services = [
    { icon: "💼", title: "해외 마케팅" },
    { icon: "📸", title: "퍼블리셔" },
    { icon: "📦", title: "캐드원(제도사)" },
    { icon: "🎯", title: "해외 세일즈" },
    { icon: "📞", title: "해외 CS" },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#26C2B9] to-[#288BE7]">
      {/* Background Image with Blend Mode */}
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/deprasny/coin-siren/main/public/bg-pattern.png')] opacity-80 mix-blend-color-burn bg-cover bg-center bg-no-repeat"></div>

      {/* Fallback/Overlay for better text contrast if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#26C2B9] to-[#288BE7] opacity-90 mix-blend-multiply"></div>

      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        <div className="text-white space-y-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Badge - Mobile: Blue background, Desktop: White */}
            <div className="flex flex-col items-start mb-6 gap-[16px] lg:gap-0">
              <div className="bg-[#8BC4FF] lg:bg-white px-[12px] py-[6px] rounded-[8px] shadow-md">
                <span className="text-white lg:text-[#40E2E8] font-black text-[18px]">풀타임, 파트타임</span>
              </div>
              {/* Arrow pointer below badge - only on desktop */}
              <div className="hidden lg:block ml-[12px] mt-[-5px]">
                <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 14L0 0H34L17 14Z" fill="white" />
                </svg>
              </div>
            </div>

            {/* Title - Mobile: 36px, Desktop: 64px */}
            <motion.h1
              className="text-[36px] lg:text-[64px] font-black leading-[1.3] lg:leading-[1.2] whitespace-pre-line tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.title}
            </motion.h1>
            {/* Subtitle - white/80%, 18px, font-black, line-height 150% */}
            <motion.h2
              className="text-[18px] lg:text-2xl font-black text-white/80 lg:whitespace-pre-line mt-6 leading-[1.5] lg:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.subtitle}
            </motion.h2>

            {/* CTA link - Desktop only (shows below slider on mobile) */}
            <motion.div
              className="hidden lg:block mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-bold underline decoration-white/50 underline-offset-8 cursor-pointer hover:text-yellow-40 transition-colors inline-block">
                {data.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Stats - Desktop only (in left column) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:flex gap-[48px] mt-12 pt-8"
          >
            {data.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-[8px]">
                {/* Decorative line */}
                <div className="w-[129px] h-0 border-b border-white/40 mb-2"></div>

                <p className="font-black text-[18px] text-white whitespace-nowrap leading-[1.5]">
                  {stat.title}
                </p>
                <p className="font-black text-[16px] text-white/80 leading-[1.5] w-[161px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slider - FadeIn with title (500ms) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 pt-10 lg:pt-0"
        >
          <Slider items={sliderItems} />

          {/* Stats transformed to Checkmarks - Mobile only (below slider) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="lg:hidden w-full"
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C696" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-white font-black text-[16px]">한국어 능력</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C696" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-white font-black text-[16px]">업무 수행 능력</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C696" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-white font-black text-[16px]">겸업 여부</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C696" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-white font-black text-[16px]">평판 조회</span>
              </div>
            </div>

            {/* CTA text below checkmarks */}
            <p className="text-yellow-300 font-black text-[16px] underline decoration-yellow-300/50 underline-offset-4 cursor-pointer">
              개발자가 필요하신가요?
            </p>
          </motion.div>
        </motion.div>
      </div>


      {/* Bottom Service Cards - Auto-sliding carousel */}
      <div className="hidden lg:block relative z-10 overflow-hidden pb-12">
        <div className="container mx-auto px-4">
          {/* Service cards carousel - FadeIn (500ms) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative overflow-hidden"
          >
            <div
              className="flex gap-[10px] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${serviceIndex * 342}px)` }}
            >
              {/* Show services twice for smooth infinite loop */}
              {services.concat(services).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 rounded-[12px] p-[16px] flex items-center gap-[24px] w-[332px] cursor-pointer hover:bg-white/25 transition-colors shrink-0"
                >
                  <div className="bg-white/40 p-[12px] rounded-[8px] shrink-0">
                    <div className="w-[32px] h-[32px] flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <p className="font-black text-[24px] text-white leading-[1.5]">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
