'use client';

import { memo } from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = memo(({ skill }: SkillBadgeProps): JSX.Element => {
  return (
    <span className="px-3 py-1 rounded-md border border-card-skill-border text-card-skill-text text-sm lg:text-base font-black whitespace-nowrap">
      {skill}
    </span>
  );
});

SkillBadge.displayName = 'SkillBadge';

export default SkillBadge;
