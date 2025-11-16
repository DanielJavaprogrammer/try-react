import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-2 flex justify-between px-40 items-center text-(--white) ">
      <div className="flex justify-between items-center gap-3">
        <img
          src="../src/components/header/logo.png"
          alt="logo"
          className="w-15 h-15"
        />
        <h1 className="font-poppins font-bold">Maximum Click World</h1>
      </div>
      <div>
        <Link to="/signupWorker" className="flex flex-col items-center">
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
