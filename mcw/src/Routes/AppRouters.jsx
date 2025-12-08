import { Routes, Route } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import PublicSecLayout from "../Layout/PublicSecLayout";
import Home from "../pages/Public/Home";
import SejaProfissional from "../pages/Public/SejaProfissional/SejaProfissional";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<PublicSecLayout />}>
        <Route path="/sejaprofissional" element={<SejaProfissional />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
