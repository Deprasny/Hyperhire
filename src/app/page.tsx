import Hero from '@/components/organisms/Hero';
import Footer from '@/components/organisms/Footer';
import { getHeroData, getServicesData, getSliderData } from '@/lib/api';

export default async function Home() {
  const [hero, slider, services] = await Promise.all([getHeroData(), getSliderData(), getServicesData()]);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero data={hero} sliderItems={slider} />
      <Footer services={services} />
    </main>
  );
}
