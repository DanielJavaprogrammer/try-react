import { Routes, Route, Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import Dashboard from "../pages/private/Dashboard/Dashboard";

// Função simples para simular autenticação
const isAuth = () => {
  return localStorage.getItem("token"); 
};

export function PrivateRoutes() {
  return (
    <Routes>
      <Route
        element={
          isAuth() ? <PrivateLayout /> : <Navigate to="/" replace />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
