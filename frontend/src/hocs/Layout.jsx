import { Outlet } from "react-router-dom";

import Footer from "../containers/Footer";
import Header from "../containers/Header";


function Layout(){
    return (
        <div className="site-wrapper">
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout