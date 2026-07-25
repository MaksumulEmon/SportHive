import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedEvents />
    </MainLayout>
  );
}
