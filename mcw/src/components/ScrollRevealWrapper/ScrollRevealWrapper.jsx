// src/components/ScrollRevealWrapper.jsx
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
// Importa o objeto de estilos
import styles from "./ScrollReveal.module.css";

const ScrollRevealWrapper = ({ children, ...options }) => {
  const [ref, isVisible] = useScrollReveal(options);

  // Aplica as classes usando o objeto 'styles'
  // O CSS Module irá converter 'scrollRevealContainer' para um nome único (ex: 'ScrollReveal_scrollRevealContainer__a1b2c')
  const containerClass = `${styles.scrollRevealContainer} ${
    isVisible ? styles.isVisible : ""
  }`;

  return (
    <div
      ref={ref} // Atribui a referência ao elemento DOM
      className={containerClass}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
