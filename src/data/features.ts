export interface Feature {
  id: string;
  label: string;
}

export const MOBILE_FEATURES: Feature[] = [
  { id: 'korean-ability', label: '한국어 능력' },
  { id: 'work-performance', label: '업무 수행 능력' },
  { id: 'concurrent-job', label: '겸업 여부' },
  { id: 'reputation-check', label: '평판 조회' },
];
