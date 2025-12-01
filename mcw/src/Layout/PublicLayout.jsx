import Header from "../components/Header/Header"
import Footer from "../components/FooterContact/FooterContact"
import { Outlet } from "react-router-dom"

function PublicLayout(){
    return(
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
