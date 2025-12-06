'use client';

import { memo } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { SliderItem } from '@/types';
import SalaryTooltip from '@/components/molecules/SalaryTooltip';
import PersonInfo from '@/components/molecules/PersonInfo';
import SkillsList from '@/components/molecules/SkillsList';

interface SliderCardProps {
  item: SliderItem;
  style: TargetAndTransition;
  isActive: boolean;
}

const SliderCard = memo(({ item, style, isActive }: SliderCardProps): JSX.Element => {
  return (
    <motion.div
      className="absolute bg-white rounded-xl px-4 py-9 lg:p-9 shadow-card w-card-sm lg:w-card-lg h-[320px] lg:h-[408px] flex flex-col items-center text-center gap-4 lg:gap-10"
      initial={false}
      animate={style}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      {isActive && <SalaryTooltip salary={item.salary || '월 100만원'} />}

      {/* Avatar with Flag */}
      <PersonInfo
        name={item.name}
        role={item.role}
        experience={item.experience}
        avatar={item.avatar}
        flag={item.flags[0]}
      />

      <SkillsList skills={item.skills} itemId={item.id} />
    </motion.div>
  );
});

SliderCard.displayName = 'SliderCard';

export default SliderCard;
