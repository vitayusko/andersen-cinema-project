import { Hero } from '../../components/HomePageSections/Hero/Hero';
import { Categories } from '../../components/HomePageSections/CategoriesSection/Categories';
import { DevicesSection } from '../../components/HomePageSections/DevicesSection/DevicesSection';
import { FreeTrialSection } from '../../components/HomePageSections/FreeTrialSection/FreeTrialSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <DevicesSection />
      <FreeTrialSection />
    </>
  );
}