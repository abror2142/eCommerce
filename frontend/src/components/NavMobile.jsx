import { useState } from "react";

import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../assets/fonus-logo.png";




function NavMobile() {
    
    const [showCategories, setShowCategories] = useState(false)
    
    let site = document.getElementById('site')
    if(showCategories && site)
        site.classList.add("dim")
    else if(site)
        site.classList.remove("dim")
    return (
        <div className="navbar-mobile">
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={showCategories ? faX : faBars} 
                    onClick={() => setShowCategories((prev) => !prev)}
                />
            </div>

            <div>
                <img 
                    src={Logo} 
                    className="nav-mobile-logo"
                />
            </div>

            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faSearch} 
                />
            </div>
            {showCategories && 
            <div className="categories-box">
                <div>
                    <FontAwesomeIcon 
                        icon={faX} 
                        onClick={() => setShowCategories((prev) => !prev)}
                    />
                </div>
                <div>
                    <a>Smarthpones</a>
                </div>
                <a>Laptops</a>
                <a>Boots</a>
                <a>Bags</a>
                <a>Fashion</a>
                <a>Electronics</a>
            </div>
            }
        </div>
    )
}

export default NavMobile