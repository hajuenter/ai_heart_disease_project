import { ArrowUp } from "lucide-react";
import useScrollVisibility from "../hooks/useScrollVisibility";

export default function ScrollToTopButton() {
  const visible = useScrollVisibility(200);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
