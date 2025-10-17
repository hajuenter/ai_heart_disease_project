import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-48 pb-[187px] px-4 lg:pt-16 lg:pb-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div
            className="w-24 h-24 flex items-center justify-center rounded-full 
                bg-gradient-to-tr from-blue-100 to-blue-200 
                dark:from-yellow-200/20 dark:to-yellow-400/30 shadow-lg"
          >
            <Heart
              className="w-12 h-12 text-blue-600 dark:text-yellow-400 animate-heartbeat"
              fill="currentColor"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Sistem Pakar <br />
          <span className="text-blue-600 dark:text-yellow-400">
            Penyakit Jantung
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Deteksi dini risiko penyakit jantung dengan teknologi machine
          learning. Cepat, akurat, dan mudah digunakan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/expert"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 
                       text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg 
                       hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Mulai Konsultasi
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600
                       text-gray-700 dark:text-gray-200 font-semibold rounded-xl
                       hover:border-blue-600 dark:hover:border-yellow-400 transition-all duration-200"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </div>
    </section>
  );
}
