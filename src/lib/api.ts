import { HERO_DATA, SLIDER_ITEMS } from '@/data/mock';
import { FOOTER_SERVICES } from '@/data/services';
import { HeroData, ServiceItem, SliderItem } from '@/types';

async function fetchData<T>(type: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`http://localhost:3000/api/mock-data?type=${type}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (e) {
    console.error(`Fetch ${type} failed, using fallback data`, e);
    return fallback;
  }
}

export async function getHeroData(): Promise<HeroData> {
  return fetchData('hero', HERO_DATA);
}

export async function getSliderData(): Promise<SliderItem[]> {
  return fetchData('slider', SLIDER_ITEMS);
}

export async function getServicesData(): Promise<ServiceItem[]> {
  return fetchData('services', FOOTER_SERVICES);
}
