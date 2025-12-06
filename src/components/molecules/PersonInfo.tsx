'use client';

import { memo } from 'react';
import Avatar from '@/components/atoms/Avatar';

interface PersonInfoProps {
  name: string;
  role: string;
  experience: string;
  avatar: string;
  flag: string;
}

const PersonInfo = memo(({ name, role, experience, avatar, flag }: PersonInfoProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar src={avatar} alt={name} size="lg" flag={flag} />

      <div className="flex flex-col items-center leading-relaxed">
        <h3 className="text-lg lg:text-2xl font-black text-card-text mb-0">{name}</h3>
        <p className="text-card-role font-black text-sm lg:text-base">
          {role} · {experience}
        </p>
      </div>
    </div>
  );
});

PersonInfo.displayName = 'PersonInfo';

export default PersonInfo;
