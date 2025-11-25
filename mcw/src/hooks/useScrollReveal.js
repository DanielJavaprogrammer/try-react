import { useEffect, useRef, useState } from "react";

const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  // useRef é usado para obter a referência (ref) do elemento DOM
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Se o elemento está intersectando (visível)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Para que o efeito aconteça apenas uma vez
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Conecta o observador ao elemento
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Limpeza: desliga o observador quando o componente for desmontado
    return () => {
      if (elementRef.current) {
        // Verifica se ainda está sendo observado antes de tentar desobservar
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]); // Dependência: re-executa se as opções mudarem

  // Retorna a referência do elemento e o estado de visibilidade
  return [elementRef, isVisible];
};

export default useScrollReveal;
