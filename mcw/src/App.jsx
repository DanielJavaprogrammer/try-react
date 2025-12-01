import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRouters"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )

}

export default App;
