import { useState, useRef } from "react";
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";


function NavBar(){
    const [search, setSearch] = useState('')
    const searchRef = useRef()

    async function handleSubmit() {
        console.log(search)
    }
  
    return (
        <nav className="nav-bar">
            <div className="nav-left">
                <h2>eCommerce</h2>
            </div>

            <div className="nav-center">
                <div className="search-box">
                    <div className="search-icon-box">
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                            className="search-icon" 
                            onClick={handleSubmit}
                        />
                    </div>  
                        <input 
                            id="search-input"
                            className="search-input"
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            ref={searchRef}
                        />
                    <div className="xmark-icon-box">
                        {(search.length > 0) && 
                            <FontAwesomeIcon 
                                icon={faXmark} 
                                className="xmark-icon"
                                onClick={() => {
                                    searchRef.current.focus()
                                    setSearch('')
                                }} 
                            />
                        }   
                    </div>
                </div>
            </div>

            <div className="nav-right">
                <div className="nav-account">
                    <NavLink className="register" to="#">Register</NavLink>
                    <NavLink className="login" to="#">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar