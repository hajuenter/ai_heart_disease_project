import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { Activity, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Analisis Cerdas",
      desc: "Machine learning untuk prediksi akurat berdasarkan 13 parameter medis",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keamanan Data",
      desc: "Data Anda terenkripsi dan aman, hanya digunakan untuk analisis medis.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cepat & Efisien",
      desc: "Prediksi instan hanya dalam hitungan detik dengan hasil yang jelas.",
    },
  ];

  const riskFactors = [
    "Merokok",
    "Hipertensi",
    "Kolesterol tinggi",
    "Diabetes",
    "Kurang aktivitas fisik",
  ];

  const preventions = [
    "Rutin berolahraga minimal 30 menit sehari",
    "Konsumsi makanan sehat rendah lemak jenuh",
    "Hindari merokok dan konsumsi alkohol berlebihan",
    "Kontrol tekanan darah dan kadar gula darah",
    "Lakukan pemeriksaan rutin ke dokter",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      <FeaturesSection features={features} />
      <AboutSection riskFactors={riskFactors} preventions={preventions} />
      <CTASection />
      <Footer />
    </div>
  );
}
