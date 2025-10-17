import { AlertTriangle, CheckCircle } from "lucide-react";

export default function AboutSection({ riskFactors, preventions }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Apa itu Penyakit Jantung?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Penyakit jantung adalah kondisi yang mempengaruhi struktur dan
              fungsi jantung. Ini termasuk penyakit jantung koroner, aritmia,
              gagal jantung, dan penyakit katup jantung.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Penyakit jantung koroner adalah jenis yang paling umum, disebabkan
              oleh penumpukan plak di arteri yang memasok darah ke jantung, yang
              dapat menyebabkan serangan jantung.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                    Faktor Risiko
                  </h4>
                  <ul className="space-y-2">
                    {riskFactors.map((factor, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-red-800 dark:text-red-300 flex items-start gap-2"
                      >
                        <span className="text-red-500 mt-1">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Cara Pencegahan
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pencegahan adalah kunci utama dalam mengurangi risiko penyakit
              jantung. Berikut adalah langkah-langkah yang dapat Anda lakukan:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="space-y-3">
                {preventions.map((prevention, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {prevention}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                💡 Tips Kesehatan Jantung
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Konsultasikan dengan dokter secara rutin, terutama jika memiliki
                faktor risiko. Deteksi dini dapat menyelamatkan nyawa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
