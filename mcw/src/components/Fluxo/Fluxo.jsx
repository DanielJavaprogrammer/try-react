import styles from "./fluxo.module.css";
import imgFluxo from "./image/fluxo.jpg";

function Fluxo() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Entenda o Fluxo do Negocio</h1>
          <img src={imgFluxo} alt="Men making business" />
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>Peça o que precisa</h2>
            <p>
              Tem uma necessidade? Escolha o tipo de profissional que procura
              (eletricista, cozinheiro, designer, etc.) e descreva o serviço.
            </p>
          </div>
          <div className={styles.box}>
            <h2>Converse com profissionais </h2>
            <p>
              Os profissionais recebem sua solicitação e respondem pelo nosso
              chat interno — de forma segura e rápida.
            </p>
          </div>
          <div className={styles.box}>
            <h2>Combine e feche negócio</h2>
            <p>
              Converse, negocie e finalize o serviço com segurança dentro da
              plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fluxo;
