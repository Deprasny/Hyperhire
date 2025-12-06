'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/atoms/Badge';
import { FADE_UP, FADE_UP_DELAY } from '@/constants/animations';

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroContent({ title, subtitle, description }: HeroContentProps): JSX.Element {
  return (
    <motion.div {...FADE_UP_DELAY(0.3)} className="text-white space-y-8 pt-4">
      {/* Badge */}
      <div className="flex flex-col items-start mb-6 gap-0">
        <Badge>풀타임, 파트타임</Badge>
        {/* Arrow pointer */}
        <div className="ml-[12px] mt-[-5px] z-10 relative">
          <svg
            width="24"
            height="14"
            viewBox="0 0 34 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block lg:hidden">
            <path d="M12 14L0 0H24L12 14Z" fill="currentColor" className="text-primary-light" />
          </svg>
          <svg
            width="34"
            height="14"
            viewBox="0 0 34 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block">
            <path d="M17 14L0 0H34L17 14Z" fill="white" />
          </svg>
        </div>
      </div>
      <motion.h1
        className="text-[36px] lg:text-[64px] font-black leading-[1.3] lg:leading-[1.2] whitespace-pre-line tracking-tight"
        {...FADE_UP}>
        {title}
      </motion.h1>

      <motion.h2
        className="text-[18px] lg:text-2xl font-black text-white/80 lg:whitespace-pre-line mt-6 leading-[1.5] lg:leading-relaxed"
        {...FADE_UP}>
        {subtitle}
      </motion.h2>

      <motion.div className="hidden lg:block mt-12" {...FADE_UP}>
        <p className="text-lg font-bold underline decoration-white/50 underline-offset-8 cursor-pointer hover:text-yellow-40 transition-colors inline-block">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
