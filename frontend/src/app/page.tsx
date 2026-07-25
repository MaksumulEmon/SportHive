import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import CategoriesSection from '@/components/home/CategoriesSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedEvents />
      <CategoriesSection />
    </MainLayout>
  );
}
