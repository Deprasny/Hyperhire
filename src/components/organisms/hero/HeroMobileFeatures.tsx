'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FADE_IN } from '@/constants/animations';
import { MOBILE_FEATURES } from '@/data/features';

export default function HeroMobileFeatures(): JSX.Element {
  return (
    <motion.div {...FADE_IN} transition={{ delay: 0.5, duration: 0.5 }} className="lg:hidden w-full">
      <div className="grid grid-cols-2 gap-3 mb-6">
        {MOBILE_FEATURES.map((feature) => (
          <div key={feature.id} className="flex items-center gap-2">
            <div className="w-6 h-6 relative shrink-0">
              <Image src="/images/check-mark.png" alt="check" fill className="object-contain" />
            </div>
            <span className="text-white font-black text-[16px]">{feature.label}</span>
          </div>
        ))}
      </div>

      {/* CTA text below checkmarks */}
      <p className="text-yellow-300 font-black text-[16px] underline decoration-yellow-300/50 underline-offset-4 cursor-pointer">
        개발자가 필요하신가요?
      </p>
    </motion.div>
  );
}
