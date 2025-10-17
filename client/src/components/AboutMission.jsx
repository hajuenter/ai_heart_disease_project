import React from "react";
import { HeartPulse, ShieldCheck, Activity, AlertTriangle } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Misi */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
            Misi Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Memberikan akses prediksi risiko penyakit jantung yang akurat,
            cepat, dan aman. Kami percaya pencegahan dini adalah kunci hidup
            sehat.
          </p>
        </div>

        {/* Grid Informasi */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Apa itu penyakit jantung */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-yellow-900/30 mb-4">
              <HeartPulse className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Apa itu Penyakit Jantung?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Penyakit jantung adalah gangguan pada organ jantung yang
              memengaruhi fungsi memompa darah. Kondisi ini bisa berbahaya jika
              tidak dideteksi atau ditangani sejak dini.
            </p>
          </div>

          {/* Jenis penyakit */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-yellow-900/30 mb-4">
              <Activity className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Jenis Penyakit Jantung
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Termasuk penyakit jantung koroner, gagal jantung, aritmia, dan
              penyakit katup jantung. Masing-masing memiliki gejala dan risiko
              yang berbeda.
            </p>
          </div>

          {/* Penyebab */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-yellow-900/30 mb-4">
              <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Penyebab Umum
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Faktor risiko termasuk pola makan tidak sehat, merokok, kurang
              olahraga, stres, tekanan darah tinggi, kolesterol, dan diabetes.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition md:col-span-2 lg:col-span-3 lg:text-center">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full 
                  bg-blue-100 dark:bg-yellow-900/30 mb-4 
                  lg:mx-auto"
            >
              <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Cara Pencegahan
            </h3>
            <p
              className="text-gray-600 dark:text-gray-400 
                lg:max-w-3xl lg:mx-auto"
            >
              Menjaga pola makan sehat, rutin berolahraga, menghindari rokok dan
              alkohol, mengelola stres, serta melakukan pemeriksaan kesehatan
              secara berkala adalah langkah penting untuk mencegah penyakit
              jantung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
