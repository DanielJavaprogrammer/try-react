import styles from "./ServicesSection.module.css";
import eletricista from "../../assets/servicesImages/eletricista.jpg";
import encanador from "../../assets/servicesImages/encanador.webp";
import designer from "../../assets/servicesImages/logocreator.webp";
import pedreiro from "../../assets/servicesImages/pedreiro.webp";
import webdev from "../../assets/servicesImages/sitecreator.webp";
import videomaker from "../../assets/servicesImages/videomaker.webp";

const services = [
  {
    title: "Eletricista",
    imgSrc: eletricista,
  },
  { title: "Encanador", imgSrc: encanador },
  {
    title: "Designer Gráfico",
    imgSrc: designer,
  },
  { title: "Pedreiro", imgSrc: pedreiro },
  {
    title: "Desenvolvedor Web",
    imgSrc: webdev,
  },
  { title: "Videomaker", imgSrc: videomaker },
];

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h1>Basta escolher um serviço</h1>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ backgroundImage: `url(${s.imgSrc})` }}
          >
            <div className={styles.content}>
              <h2>{s.title}</h2>
              <button>Fazer Orçamento</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
