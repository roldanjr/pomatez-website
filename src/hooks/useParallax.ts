import { useState, useEffect } from "react";

export function useParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function parallaxShift() {
      setOffset(window.pageYOffset);
    }
    document.addEventListener("scroll", parallaxShift);
    return () => document.removeEventListener("scroll", parallaxShift);
  }, []);

  return offset;
}
