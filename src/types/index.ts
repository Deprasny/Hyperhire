export interface SliderItem {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  flags: string[];
  skills: string[];
  salary?: string;
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
