'use client';

import { ServiceItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

import InfoColumn from '@/components/molecules/InfoColumn';
import { COMPANY_INFO } from '@/data/company-info';

interface FooterProps {
  services: ServiceItem[];
}

export default function Footer({ services }: FooterProps): JSX.Element {
  return (
    <footer className="bg-bg-light py-16">
      <div className="container mx-auto px-4">
        {/* Top Section - Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Logo and Contact Info */}
          <div className="lg:w-[280px] shrink-0 space-y-5">
            <div className="mb-5">
              <div className="mb-5 relative w-[180px] h-[34px]">
                <Image
                  src="/images/logo-footer.png"
                  alt="hyperhire"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                />
              </div>
            </div>
            <p className="text-text-secondary font-black text-[14px] leading-[1.6]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div className="space-y-1">
              <p className="text-text-secondary text-[13px] font-black">010-0000-0000</p>
              <p className="text-text-secondary text-[13px] font-black">aaaaa@naver.com</p>
            </div>
          </div>

          {/* Service Cards - Responsive Grid */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {services.slice(0, 4).map((service, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white p-[16px] rounded-[12px] shadow-sm flex flex-col gap-[16px] hover:shadow-md transition-shadow cursor-pointer">
                {/* Top section - Icon and Title */}
                <div className="flex flex-col gap-[12px]">
                  {/* Icon */}
                  <div className="bg-bg-muted p-[8px] rounded-[8px] w-fit">
                    <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                      <Image
                        src={`/images/footer/${service.icon}`}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-text-secondary font-black text-[14px] leading-[1.5]">{service.title}</p>
                  </div>
                </div>

                {/* Link */}
                <div className="flex items-center gap-[4px] text-text-tertiary">
                  <span className="text-[14px] font-black leading-[1.5]">바로가기</span>
                  <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                    <Image src="/images/arrow.png" alt="arrow" fill className="object-contain" sizes="20px" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Company Info - Responsive Grid */}
        <div className="pt-6 border-t border-border-medium">
          {/* Mobile: Stacked, Desktop: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-[13px] font-black mb-4">
            {COMPANY_INFO.map((info, index) => (
              <InfoColumn key={index} label={info.label} value={info.value} additionalValue={info.additionalValue} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-[13px] text-text-tertiary font-black">ⓒ 2023 Hyperhire</div>
      </div>
    </footer>
  );
}
