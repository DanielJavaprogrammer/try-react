import useScrollReveal from "../../hooks/useScrollReveal";
import styles from "./ScrollReveal.module.css";

const ScrollRevealWrapper = ({ children, ...options }) => {
  const [ref, isVisible] = useScrollReveal(options);
  const containerClass = `${styles.scrollRevealContainer} ${
    isVisible ? styles.isVisible : ""
  }`;

  return (
    <div ref={ref} className={containerClass}>
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
