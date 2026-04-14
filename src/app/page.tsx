import HeroSection from "@/components/sections/HeroSection";
import FeaturedDrops from "@/components/sections/FeaturedDrops";
import CypherSection from "@/components/sections/CypherSection";
import RosterSection from "@/components/sections/RosterSection";
import AboutSection from "@/components/sections/AboutSection";
import EventSection from "@/components/sections/EventSection";
import GallerySection from "@/components/sections/GallerySection";
import StatementSection from "@/components/sections/StatementSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDrops />
      <CypherSection />
      <RosterSection />
      <EventSection />
      <AboutSection />
      <GallerySection />
      <StatementSection />
    </>
  );
}
