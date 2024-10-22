import { useState } from "react";

import TopBar from "./Desktop/TopBar";
import MainBar from "./Desktop/MainBar";
import BottomBar from "./Desktop/BottomBar";
import NavMobile from "./Mobile/NavMobile";
import NavMobileBottom from "./Mobile/NavMobileBottom";

function NavBar(){
    return (
        <nav className="navbar">
            <div className="nav-desktop">
                <TopBar />
                <MainBar />
                <BottomBar />
            </div>
            <div className="nav-mobile">
                <NavMobile />
            </div>
        </nav>
    )
}

export default NavBar