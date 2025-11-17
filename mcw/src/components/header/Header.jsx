import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img
          src="../src/components/header/logo.png"
          alt="logo"
          className="w-15 h-15"
        />
        <h1>Maximum Click World</h1>
      </div>
      <div className={styles.headerLinks}>
        <Link to="/signupWorker">
          <span>Sou um profissional</span>
          <img
            src="../src/components/header/underline.png"
            alt="underline"
            className="w-45"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
