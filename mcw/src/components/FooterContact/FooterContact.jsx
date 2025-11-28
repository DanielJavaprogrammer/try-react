import styles from "./footerContact.module.css";
import logo from "./images/logo.png";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";

function FooterContact() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.columnBrand}>
          <div className={styles.logoWrapper}>
            <img src={logo} alt="Logo Maximum Click World" />
            <h2>aximum World Click</h2>
          </div>

          <div className={styles.socialBox}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>

        <div className={styles.columnLinks}>
          <nav className={styles.linkGroup}>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Políticas do site</a>
              </li>
              <li>
                <a href="#">Formas de pagamento</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Planos Profissionais</a>
              </li>
            </ul>
          </nav>

          <nav className={styles.linkGroup}>
            <ul>
              <li>
                <a href="#">Página Inicial</a>
              </li>
              <li>
                <a href="#">Criar um site</a>
              </li>
              <li>
                <a href="#">Criar Logo</a>
              </li>
              <li>
                <a href="#">Book de Fotos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.columnContact}>
          <h3>CONTATO</h3>
          <address className={styles.contactInfo}>
            <a href="mailto:contato@mcw.com.br">contato@mcw.com.br</a>
            <a href="tel:+551199999999">+55 (11) 9999-9999</a>
          </address>
          <button className={styles.ctaButton}>Trabalhe conosco</button>
        </div>
      </div>
    </footer>
  );
}

export default FooterContact;
