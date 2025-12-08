import { Routes, Route } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../pages/Public/Home";
import Hero from "../pages/Public/SejaProfissional/components/Hero/Hero";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/sejaprofissional" element={<Hero />} />
    </Routes>
  );
}

export default AppRouter;
