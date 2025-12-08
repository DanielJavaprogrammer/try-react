import { Outlet } from "react-router-dom";
import HeaderSecundario from "../components/HeaderSecundario/HeaderSecundario";

function PublicSecLayout() {
  return (
    <div>
      <HeaderSecundario />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicSecLayout;
