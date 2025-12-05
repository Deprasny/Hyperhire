export interface SliderItem {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  flags: string[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  stats: { title: string; description: string }[];
}

export interface ServiceItem {
  icon: string;
  title: string;
}

export interface PageData {
  hero: HeroData;
  slider: SliderItem[];
  services: ServiceItem[];
}
