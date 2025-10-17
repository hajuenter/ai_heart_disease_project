import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Footer() {
  const year = new Date().getFullYear();
  const { scrollTop } = useScrollToTop();
  const location = useLocation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Title */}
          <div className="flex items-center gap-2">
            <Heart
              className="w-6 h-6 text-blue-600 dark:text-yellow-400"
              fill="currentColor"
            />
            <span className="font-bold text-gray-900 dark:text-white text-lg">
              Sistem Pakar Jantung
            </span>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === "/") scrollTop();
              }}
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Beranda
            </Link>
            <Link
              to="/expert"
              onClick={() => {
                if (location.pathname === "/expert") scrollTop();
              }}
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Konsultasi
            </Link>
            <Link
              to="/about"
              onClick={() => {
                if (location.pathname === "/about") scrollTop();
              }}
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Tentang
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3">
          <p>© {year} Sistem Pakar Jantung. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <span className="text-red-500">❤️</span> & teknologi
            Machine Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
