export default function Header() {
  return (
    <div>
      <header>
        <h1>Maximum World Click</h1>
        <nav>
          <ul>
            <li>
              <Link to="/comoFunciona">Como Funciona</Link>
            </li>
            <li>
              <Link to="/Segurança">Segurança</Link>
            </li>
            <li>
              <Link to="/Planos">Planos</Link>
            </li>
            <li>
              <Link to="/Entrar">Entrar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
