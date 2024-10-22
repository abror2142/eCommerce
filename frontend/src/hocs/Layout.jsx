import { Outlet } from "react-router-dom";

import Footer from "../containers/Footer";
import Header from "../containers/Header";
import NavMobileBottom from "../components/NavMobileBottom";


function Layout(){
    return (
        <div className="site-wrapper">
            <header className="header">
                <Header />
                <hr />
            </header>
            
            <main className="main">
                <Outlet />
            </main>
            
            <footer className="footer">
                <Footer />
                <NavMobileBottom className="nav-mobile"/>
            </footer>
        </div>
    )
}

export default Layout