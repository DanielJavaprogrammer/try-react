import "./index.css";
// import Header from "./components/Header/Header";
// import FooterContact from "./components/FooterContact/FooterContact";
// import Home from "./pages/public/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
