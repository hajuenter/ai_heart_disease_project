import React from "react";
import { Heart } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="lg:pt-24 lg:pb-28 py-20 text-center px-6">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Icon Badge */}
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-yellow-200/20 dark:to-yellow-400/30 shadow-lg">
          <Heart
            className="w-12 h-12 text-blue-600 dark:text-yellow-400 animate-heartbeat"
            fill="currentColor"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
          Tentang Sistem Pakar <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-yellow-400">
            Penyakit Jantung
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Aplikasi ini dirancang untuk membantu prediksi risiko penyakit jantung
          menggunakan kecerdasan buatan. Tampilan dibuat sederhana, ramah
          pengguna, dan responsif untuk berbagai perangkat.
        </p>
      </div>
    </section>
  );
}
