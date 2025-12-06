import { HeroData, SliderItem } from '@/types';

export const HERO_DATA: HeroData = {
  title: '최고의 실력을 가진\n외국인 인재를 찾고 계신가요?',
  subtitle: '법률 및 인사관리 부담없이\n1주일 이내에 원격 채용해보세요.',
  description: '개발자가 필요하신가요?',
  stats: [
    { title: '평균 월 120만원', description: '임금을 해당 국가를 기준으로 계산합니다.' },
    { title: '최대 3회 인력교체', description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.' },
    { title: '평균 3일, 최대 10일', description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
  ],
};

export const SLIDER_ITEMS: SliderItem[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    avatar: 'https://i.pravatar.cc/150?img=1',
    flags: ['🇺🇸', '🇬🇧'],
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 게시물 관리', '블로그 포스팅 작성'],
    salary: '월 100만원',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: '해외 마케팅',
    experience: '4y+',
    avatar: 'https://i.pravatar.cc/150?img=5',
    flags: ['🇨🇦', '🇫🇷'],
    skills: ['마케팅 전략 수립', 'SEO 최적화', '광고 캠페인 관리', '데이터 분석'],
    salary: '월 120만원',
  },
  {
    id: 3,
    name: 'Justin Biber',
    role: '퍼블리셔',
    experience: '3y+',
    avatar: 'https://i.pravatar.cc/150?img=3',
    flags: ['🇰🇷', '🇯🇵'],
    skills: ['HTML/CSS', '반응형 웹 디자인', 'UI 구현', '웹 접근성'],
    salary: '월 110만원',
  },
  {
    id: 4,
    name: 'Miley Cyrus',
    role: '캐드원',
    experience: '5y+',
    avatar: 'https://i.pravatar.cc/150?img=9',
    flags: ['🇦🇺', '🇩🇪'],
    skills: ['AutoCAD', '건축 설계', '3D 모델링', '도면 작성'],
    salary: '월 150만원',
  },
];
