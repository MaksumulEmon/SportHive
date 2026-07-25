import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedEvents />
      <CategoriesSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </MainLayout>
  );
}
