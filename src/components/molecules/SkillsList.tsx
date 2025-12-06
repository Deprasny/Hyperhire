'use client';

import { memo } from 'react';
import SkillBadge from '@/components/atoms/SkillBadge';

interface SkillsListProps {
  skills: string[];
  itemId: number;
}

const SkillsList = memo(({ skills, itemId }: SkillsListProps): JSX.Element => {
  return (
    <ul className="flex flex-wrap justify-center gap-2 items-start w-full" role="list">
      {skills.map((skill, idx) => (
        <li key={`skill-${itemId}-${idx}`}>
          <SkillBadge skill={skill} />
        </li>
      ))}
    </ul>
  );
});

SkillsList.displayName = 'SkillsList';

export default SkillsList;
