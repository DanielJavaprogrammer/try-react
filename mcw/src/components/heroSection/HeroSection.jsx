import styles from "./HeroSextion.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h1>Um click,</h1>
          <h1>Uma oportunidade,</h1>
          <h1>Uma solução!</h1>
        </div>

        <p className={styles.subtitle}>
          Contrate serviços de um jeito rápido, seguro e confiável
        </p>
      </div>
      <button className={styles.btn}>Fazer Orçamento</button>
    </section>
  );
}

export default HeroSection;
