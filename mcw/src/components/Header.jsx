import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <img src="mcw\src\components\logo.jpg" alt="logo" />
        <h1>Maximum Click World</h1>
      </div>
      <div>
        <Link to="/signupWorker">Sou um profissional</Link>
      </div>
    </header>
  );
}

export default Header;
