'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import ChevronIcon from '@/components/atoms/icons/ChevronIcon';

import { FADE_IN } from '@/constants/animations';

interface SliderNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderNavigation = memo(({ onPrev, onNext }: SliderNavigationProps): JSX.Element => {
  return (
    <>
      <motion.button
        {...FADE_IN}
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-[calc(50%-190px)] lg:left-[calc(50%-300px)] top-[calc(50%-20px)] lg:top-[calc(50%-50px)] -translate-y-1/2 text-white/90 hover:text-white hover:scale-110 transition-all z-30">
        <ChevronIcon direction="left" width={32} height={32} />
      </motion.button>
      <motion.button
        {...FADE_IN}
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-[calc(50%-190px)] lg:right-[calc(50%-300px)] top-[calc(50%-20px)] lg:top-[calc(50%-50px)] -translate-y-1/2 text-white/90 hover:text-white hover:scale-110 transition-all z-30">
        <ChevronIcon direction="right" width={32} height={32} />
      </motion.button>
    </>
  );
});

SliderNavigation.displayName = 'SliderNavigation';

export default SliderNavigation;
