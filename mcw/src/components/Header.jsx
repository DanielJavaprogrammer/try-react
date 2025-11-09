import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex bg-blue-100 justify-around items-center gap-10">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/pepino">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
