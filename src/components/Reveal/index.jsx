import { useEffect, useRef } from "react";
import * as S from "./styles";

// Conteúdo visível por padrão; a animação é uma melhoria progressiva.
export function Reveal({ children, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || !window.IntersectionObserver || motion.matches) return;
    let animation;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!motion.matches && node.animate)
          animation = node.animate(
            [
              { opacity: 0.35, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 550, easing: "cubic-bezier(.2,.7,.3,1)" },
          );
        observer.disconnect();
      },
      { threshold: 0.08 },
    );
    const cancelOnReducedMotion = () => {
      if (motion.matches) animation?.cancel();
    };
    motion.addEventListener("change", cancelOnReducedMotion);
    observer.observe(node);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motion.removeEventListener("change", cancelOnReducedMotion);
    };
  }, []);
  return (
    <S.Root ref={ref} className={className}>
      {children}
    </S.Root>
  );
}
