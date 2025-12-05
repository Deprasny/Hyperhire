import Hero from '@/components/organisms/Hero';
import Footer from '@/components/organisms/Footer';
import { getPageData } from '@/lib/api';

export default async function Home() {
  const data = await getPageData();

  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero data={data.hero} sliderItems={data.slider} />
      <Footer services={data.services} />
    </main>
  );
}
