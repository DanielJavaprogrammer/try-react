import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.badge}>🚀 A revolução do trabalho autônomo</div>

        <h1 className={styles.title}>
          Transforme suas habilidades em{" "}
          <span className="text-gradient">renda garantida</span>.
        </h1>

        <p className={styles.description}>
          A plataforma onde o cliente paga antes de você começar. Segurança
          absoluta para quem trabalha, qualidade verificada para quem contrata.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary}>
            Começar Gratuitamente <ArrowRight size={20} />
          </button>
          <button className={styles.btnSecondary}>Saber mais</button>
        </div>
      </div>
    </section>
  );
}
