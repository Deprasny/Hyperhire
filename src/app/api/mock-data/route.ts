import { HERO_DATA, SLIDER_ITEMS } from '@/data/mock';
import { FOOTER_SERVICES } from '@/data/services';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Artificial delay to demonstrate generic loading state UI
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'hero') return NextResponse.json(HERO_DATA);
  if (type === 'slider') return NextResponse.json(SLIDER_ITEMS);
  if (type === 'services') return NextResponse.json(FOOTER_SERVICES);

  const data = {
    hero: HERO_DATA,
    slider: SLIDER_ITEMS,
    services: FOOTER_SERVICES,
  };
  return NextResponse.json(data);
}
