import { HERO_DATA, SLIDER_ITEMS } from '@/data/mock';
import { FOOTER_SERVICES } from '@/data/services';
import { HeroData, ServiceItem, SliderItem } from '@/types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getWithDelay<T>(data: T): Promise<T> {
  // Simulate 2s delay to demonstrate loading state
  await delay(2000);
  return data;
}

export async function getHeroData(): Promise<HeroData> {
  return getWithDelay(HERO_DATA);
}

export async function getSliderData(): Promise<SliderItem[]> {
  return getWithDelay(SLIDER_ITEMS);
}

export async function getServicesData(): Promise<ServiceItem[]> {
  return getWithDelay(FOOTER_SERVICES);
}
