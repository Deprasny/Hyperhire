'use client';

import { motion } from 'framer-motion';
import Slider from './Slider';
import Header from './Header';
import { HeroData, SliderItem } from '@/types';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import HeroServiceCarousel from './hero/HeroServiceCarousel';
import HeroMobileFeatures from './hero/HeroMobileFeatures';

interface HeroProps {
  data: HeroData;
  sliderItems: SliderItem[];
}

export default function Hero({ data, sliderItems }: HeroProps): JSX.Element {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gradient-start to-gradient-end">
      <HeroBackground />

      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        <div className="text-white space-y-8 pt-4">
          <HeroContent title={data.title} subtitle={data.subtitle} description={data.description} />
          <HeroStats stats={data.stats} />
        </div>

        {/* Slider Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 pt-10 lg:pt-0">
          <Slider items={sliderItems} />
          <HeroMobileFeatures />
        </motion.div>
      </div>

      <HeroServiceCarousel />
    </section>
  );
}
