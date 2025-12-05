'use client';

import { ServiceItem } from '@/types';

interface FooterProps {
  services: ServiceItem[];
}

export default function Footer({ services }: FooterProps) {
  return (
    <footer className="bg-[#FBFBFB] py-16">
      <div className="container mx-auto px-4">
        {/* Top Section - Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Logo and Contact Info */}
          <div className="lg:w-[280px] shrink-0 space-y-5">
            <div className="flex items-center gap-2 mb-5">
              {/* Logo icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-[#4A77FF] to-[#26C2B9] rounded transform rotate-45"></div>
              <h2 className="text-[#343741] text-xl font-black">hyperhire</h2>
            </div>
            <p className="text-[#343741] font-black text-[14px] leading-[1.6]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div className="space-y-1">
              <p className="text-[#343741] text-[13px] font-black">010-0000-0000</p>
              <p className="text-[#343741] text-[13px] font-black">aaaaa@naver.com</p>
            </div>
          </div>

          {/* Service Cards - Responsive Grid */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="bg-white p-[16px] rounded-[12px] shadow-sm flex flex-col gap-[16px] hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Top section - Icon and Title */}
                <div className="flex flex-col gap-[12px]">
                  {/* Icon */}
                  <div className="bg-[#EFF1F6] p-[8px] rounded-[8px] w-fit">
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      <span className="text-lg">{service.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[#343741] font-black text-[14px] leading-[1.5]">
                      {service.title}
                    </p>
                  </div>
                </div>

                {/* Link */}
                <div className="flex items-center gap-[4px] text-[#5E626F]">
                  <span className="text-[14px] font-black leading-[1.5]">바로가기</span>
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="m10 14 4-4m0 0-4-4m4 4H8" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Company Info - Responsive Grid */}
        <div className="pt-6 border-t border-[#E9EAED]">
          {/* Mobile: Stacked, Desktop: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-[13px] font-black mb-4">
            {/* Column 1 */}
            <div className="space-y-2">
              <div className="text-[#343741]">상호명</div>
              <div className="text-[#5E626F]">하이퍼하이어</div>
              <div className="text-[#343741] mt-4">Hyperhire India Private Limited</div>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <div className="text-[#343741]">대표 CEO</div>
              <div className="text-[#5E626F]">김주현</div>
              <div className="text-[#5E626F] mt-4">Juhyun Kim</div>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <div className="text-[#343741]">사업자등록번호 CIN</div>
              <div className="text-[#5E626F]">427-86-01187</div>
              <div className="text-[#5E626F] mt-4">U74110DL2016PTC290812</div>
            </div>

            {/* Column 4 */}
            <div className="space-y-2">
              <div className="text-[#343741]">주소 ADDRESS</div>
              <div className="text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호</div>
              <div className="text-[#5E626F] mt-4">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-[13px] text-[#5E626F] font-black">
          ⓒ 2023 Hyperhire
        </div>
      </div>
    </footer>
  );
}
