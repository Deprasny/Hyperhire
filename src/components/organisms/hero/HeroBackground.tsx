import React from 'react';

export default function HeroBackground(): JSX.Element {
  return (
    <>
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-90 mix-blend-multiply"></div>
    </>
  );
}
