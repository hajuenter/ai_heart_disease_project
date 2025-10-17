import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutTech from "../components/AboutTech";
import AboutStats from "../components/AboutStats";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTech />
      <Footer />
    </div>
  );
}
