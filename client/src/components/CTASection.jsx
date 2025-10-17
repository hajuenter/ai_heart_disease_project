import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-yellow-500 dark:to-yellow-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-6">
          Siap Menjaga Kesehatan Jantung Anda?
        </h2>
        <p className="text-lg text-blue-100 dark:text-yellow-900 mb-8">
          Mulailah konsultasi sekarang untuk mengetahui risiko dan langkah
          pencegahan yang tepat bagi Anda.
        </p>
        <Link
          to="/expert"
          className="px-8 py-4 bg-white text-blue-600 dark:bg-gray-900 dark:text-yellow-400 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Konsultasi Sekarang
        </Link>
      </div>
    </section>
  );
}
