import servico from "/src/assets/howToUseImages/pedido1.webp";
import profissional from "/src/assets/howToUseImages/pedido2.webp";
import negocio from "/src/assets/howToUseImages/pedido3.webp";
import styles from "./HowToUse.module.css";

function HowToUse() {
  return (
    <section className={styles.howToUseContainer}>
      <h1 className={styles.title}>Simples de Usar</h1>
      <section className={styles.servicesContainer}>
        <div className={styles.servicesContainer}>
          <div className={styles.cardService}>
            <h2>Peça o serviço</h2>
            <img src={servico} alt="Pedido 1" />
            <p>
              Escolha o tipo de profissional que precisa e descreva seu projeto.
              Rápido, simples e sem complicação.
            </p>
          </div>

          <div className={styles.cardService}>
            <h2>Converse com o profissional</h2>
            <img src={profissional} alt="Pedido 2" />
            <p>
              O profissional recebe sua solicitação e entra em contato pelo chat
              interno. Você pode trocar mensagens e alinhar todos os detalhes.
            </p>
          </div>

          <div className={styles.cardService}>
            <h2>Feche o negócio com segurança</h2>
            <img src={negocio} alt="Pedido 3" />
            <p>
              Após o pagamento, o valor fica protegido até o serviço ser
              concluído. Se algo sair do combinado, o reembolso é simples e
              garantido.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HowToUse;
