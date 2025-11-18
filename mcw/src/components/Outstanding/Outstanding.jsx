import styles from "../Outstanding/Outstanding.module.css";
import profile1 from "../../assets/outstandingImages/profile1.webp";
// import profile2 from "../../assets/outstandingImages/profile2.webp";
// import profile3 from "../../assets/outstandingImages/profile3.webp";
import starRating from "../../assets/outstandingImages/stars-rating.webp";
import verifyinfSign from "../../assets/outstandingImages/verifyinf-sign.png";

function Outstanding() {
  return (
    <section className={styles.ftg}>
      <div>
        <h1>Profissionais em destaque</h1>
        <p>
          Todos os nossos profissionais possuem verificação de dados e
          comprovação de capacitação para realizar seus projetos e serviços.
          Você pode contatar um profissional pelo nosso chat e tirar suas
          dúvidas antes de fechar o negócio.
        </p>
        <div>
          <div>
            <h3>Web Development</h3>
            <img src={profile1} alt="profissional" />
            <div>
              <span>Enzo Indio</span>
              <img src={verifyinfSign} alt="" />
            </div>
            <p>289 trabalhos</p>
            <img src={starRating} alt="fotode enzo" />
            <button>Entrar em contato</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outstanding;
