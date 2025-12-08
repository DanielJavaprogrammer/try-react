import HeaderSecundario from "../../../components/HeaderSecundario/HeaderSecundario";
import styles from "./Global.module.css";
import Hero from "../SejaProfissional/components/Hero/Hero";

function SejaProfissional() {
  return (
    <div className={styles.conteiner}>
      <HeaderSecundario />
      <Hero />
    </div>
  );
}

export default SejaProfissional;
