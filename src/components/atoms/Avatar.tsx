import { memo } from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'lg';
  flag?: string;
  className?: string;
}

const Avatar = memo(({ src, alt, size = 'sm', flag, className = '' }: AvatarProps): JSX.Element => {
  const sizeClasses = size === 'lg' ? 'w-[64px] h-[64px] lg:w-[120px] lg:h-[120px]' : 'w-[32px] h-[32px]';

  return (
    <div className={`relative ${className}`}>
      <div className={`relative ${sizeClasses} rounded-full overflow-hidden`}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 64px, 120px" />
      </div>
      {flag && (
        <div className="absolute bottom-0 right-0 z-10">
          <span className="text-base lg:text-2xl drop-shadow-md leading-none block">{flag}</span>
        </div>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
