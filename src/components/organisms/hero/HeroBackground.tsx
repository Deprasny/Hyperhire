import React from 'react';

import Image from 'next/image';

export default function HeroBackground(): JSX.Element {
  return (
    <div className="absolute inset-x-0 top-0 h-full w-full overflow-hidden z-0">
      <Image
        src="/images/bg.png"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-90 mix-blend-multiply" />
    </div>
  );
}
