function HeaderSecundario() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src="../src/components/header/logo.png" alt="logo" />
        <h1>Maximum World Click</h1>
      </div>
      <div className={styles.headerLinks}>
        <Link to="/sejaprofissional">
          <span className={styles.linkText}>Sou um profissional</span>
          <img src="../src/components/header/underline.png" alt="underline" />
        </Link>
      </div>
    </header>
  );
}

export default HeaderSecundario;
