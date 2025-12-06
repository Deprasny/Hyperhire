'use client';

import { motion } from 'framer-motion';

import { FADE_IN } from '@/constants/animations';

interface HeroStatsProps {
  stats: {
    title: string;
    description: string;
  }[];
}

export default function HeroStats({ stats }: HeroStatsProps): JSX.Element {
  return (
    <motion.div
      {...FADE_IN}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="hidden lg:flex justify-between w-full mt-12 pt-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-[8px]">
          {/* Decorative line */}
          <div className="w-[129px] h-0 border-b-2 border-white/40 mb-2"></div>

          <p className="font-black text-[18px] text-white whitespace-nowrap leading-[1.5]">{stat.title}</p>
          <p className="font-black text-[16px] text-white/80 leading-[1.5] w-[160px]">{stat.description}</p>
        </div>
      ))}
    </motion.div>
  );
}
