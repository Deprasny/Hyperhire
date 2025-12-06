'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SalaryTooltipProps {
  salary: string;
}

const SalaryTooltip = memo(({ salary }: SalaryTooltipProps): JSX.Element => {
  return (
    <div className="absolute -top-16 left-0 right-0 flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-salary-bg px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap pointer-events-auto">
        <div className="w-7 h-7 rounded-full bg-salary-bg flex items-center justify-center shrink-0">
          <Image src="/images/dollar.png" alt="$" width={26} height={26} className="object-contain" />
        </div>
        <span className="text-salary-text font-black text-lg">{salary}</span>
        {/* Tooltip Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-salary-bg"></div>
      </motion.div>
    </div>
  );
});

SalaryTooltip.displayName = 'SalaryTooltip';

export default SalaryTooltip;
