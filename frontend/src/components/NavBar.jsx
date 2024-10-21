import { useState } from "react";

import TopBar from "./TopBar";
import MainBar from "./MainBar";
import BottomBar from "./BottomBar";
import NavMobile from "./NavMobile";
import NavMobileBottom from "./NavMobileBottom";

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
                <NavMobileBottom />
            </div>
        </nav>
    )
}

export default NavBar