import styles from "./payInfo.module.css";
import paymentWays from "./images/payments.png";

function PayInfo() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <h1>Aceitamos todas as formas de pagamento</h1>
          <p className={styles.subtitle}>
            Aceitamos vários tipos de pagamento:
          </p>
          <img src={paymentWays} alt="icon formas de pagamento" />
          <button className={styles.btn}>Ver planos</button>
        </div>

        <div className={styles.card}>
          <h1>Na MCW, a segurança vem em primeiro lugar.</h1>
          <p className={styles.description}>
            O valor pago pelo cliente fica protegido até a conclusão do serviço.
            Assim, garantimos que o profissional só receba após o trabalho ser
            entregue conforme combinado. Caso algo saia do previsto, o cliente
            pode solicitar o reembolso de forma simples e sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PayInfo;
