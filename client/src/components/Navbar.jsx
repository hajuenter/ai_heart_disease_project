import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Navbar() {
  const { scrollTop } = useScrollToTop();
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: ["/"] },
    { name: "Expert", path: ["/expert"] }, // tambahkan path simple
    { name: "Simple", path: ["/expert-simple"] }, // tambahkan path simple
    { name: "Tentang", path: ["/about"] },
  ];

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") scrollTop();
          }}
          className="text-xl font-bold text-blue-600 dark:text-yellow-300"
        >
          🩺
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path[0]} // tetap arahkan ke primary path
              onClick={() => {
                if (item.path.includes(location.pathname)) scrollTop();
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition
              ${
                item.path.includes(location.pathname)
                  ? "bg-blue-600 text-white dark:bg-yellow-400 dark:text-gray-900"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
