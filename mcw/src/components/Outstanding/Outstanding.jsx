import styles from "../Outstanding/Outstanding.module.css";
import profile1 from "../../assets/outstandingImages/profile1.webp";
import profile2 from "../../assets/outstandingImages/profile2.webp";
import profile3 from "../../assets/outstandingImages/profile3.webp";
import starRating from "../../assets/outstandingImages/stars-rating.webp";
import verifyinfSign from "../../assets/outstandingImages/verifyinf-sign.png";

const data = [
  {
    title: "Web Development",
    img: profile1,
    name: "Enzo Indio",
    jobs: 289,
    rating: starRating,
  },
  {
    title: "Video Maker",
    img: profile2,
    name: "Lara Silva",
    jobs: 150,
    rating: starRating,
  },
  {
    title: "Eletricista",
    img: profile3,
    name: "Tony Ramos",
    jobs: 320,
    rating: starRating,
  },
];

function Outstanding() {
  return (
    <section className={styles.outstandingContainer}>
      <div className={styles.outstandingContent}>
        <h1 className={styles.title}>Profissionais em destaque</h1>
        <p className={styles.subtitle}>
          Todos os nossos profissionais possuem verificação de dados e
          comprovação de capacitação para realizar seus projetos e serviços.
          Você pode contatar um profissional pelo nosso chat e tirar suas
          dúvidas antes de fechar o negócio.
        </p>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>

              <img
                src={item.img}
                alt="Foto do profissional"
                className={styles.profileImg}
              />

              <div className={styles.nameArea}>
                <span>{item.name}</span>
                <img
                  src={verifyinfSign}
                  alt="Verificado"
                  className={styles.verifyIcon}
                />
              </div>

              <p>{item.jobs} trabalhos</p>

              <img
                src={item.rating}
                alt="Avaliação"
                className={styles.rating}
              />

              <button className={styles.btn}>Entrar em contato</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Outstanding;
