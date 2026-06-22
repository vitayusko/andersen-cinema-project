import { Hero } from "./components/Hero/Hero";
import { Categories } from "./components/CategoriesSection/Categories";
import { DevicesSection } from "./components/DevicesSection/DevicesSection";
import { FreeTrialSection } from "./components/FreeTrialSection/FreeTrialSection";
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