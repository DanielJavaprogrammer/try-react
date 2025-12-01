import { Routes, Route } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../pages/Public/Home";
import SejaProfissional from "../pages/Public/SejaProfissional/SejaProfissional";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
            </Route>   
                <Route path="/sejaprofissional" element={<SejaProfissional />} />
        </Routes>
    )
}

export default AppRouter;