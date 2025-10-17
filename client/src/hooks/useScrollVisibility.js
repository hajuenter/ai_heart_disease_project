import { useState, useEffect } from "react";

/**
 * Hook untuk menentukan apakah elemen sebaiknya terlihat saat scroll.
 * @param {number} offset - scrollY minimal agar tombol muncul
 * @returns {boolean} visible
 */
export default function useScrollVisibility(offset = 200) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return visible;
}
