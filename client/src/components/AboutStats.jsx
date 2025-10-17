import React from "react";

export default function AboutStats() {
  const stats = [
    { label: "Akurasi Model", value: "85%" },
    { label: "Parameter Medis", value: "13" },
    { label: "Waktu Prediksi", value: "< 2 detik" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-blue-50 dark:bg-gray-800 text-center"
          >
            <p className="text-3xl font-bold text-blue-600 dark:text-yellow-300">
              {s.value}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
