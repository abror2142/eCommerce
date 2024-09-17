import { useState } from "react";
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";


function NavBar(){
    const [search, setSearch] = useState('')

    return (
        <nav className="nav-bar">
            <div className="nav-left">
                <h2>eCommerce</h2>
            </div>

            <div className="nav-center">
                <div className="search-box">
                    <div className="search-icon-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    </div>

  
                        <input 
                            id="search-input"
                            className="search-input"
                            type="text"
                            onClick={(e) => setSearch(e.target.value)}
                        />
   
                    {(search.length > 0) && <div className="xmark-icon-box">
                        <FontAwesomeIcon icon={faXmark} className="xmark-icon" />
                    </div>}
                </div>
            </div>

            <div className="nav-right">
                <div>
                    <NavLink to="#">Register</NavLink>
                    <NavLink to="#">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar