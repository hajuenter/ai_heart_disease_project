import React from "react";
import { Cpu } from "lucide-react"; 

export default function AboutTech() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Model AI yang Digunakan
        </h2>
        <div className="mt-8 flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-blue-500 bg-gray-100 dark:bg-gray-700">
            <Cpu className="w-16 h-16 text-blue-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Machine Learning - Decision Tree
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
            Model AI ini menggunakan algoritma <strong>Decision Tree</strong>{" "}
            untuk klasifikasi.
            <br />
            Referensi:{" "}
            <a
              href="https://e-jurnal.pnl.ac.id/JAISE/article/viewFile/6389/4504"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Jurnal PNL
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
