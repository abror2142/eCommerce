import { useState, useRef } from "react";
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faCartShopping, faUser, faChartGantt } from "@fortawesome/free-solid-svg-icons";
import uzbekistan from "../assets/uzb.png";
import britain from "../assets/britain.png";
import russia from "../assets/russian.png";


function NavBar(){

    const langOptions = {
        "eng": {
            "flag": britain,
            "code": "ENG" 
        },
        "uzb": {
            "flag": uzbekistan,
            "code": "UZB"
        },
        "ru": {
            "flag": russia,
            "code": "RU"
        }
    }

    const [search, setSearch] = useState('')
    const searchRef = useRef()
    const [showLangOptions, setShowLangOptions] = useState(false)
    const [activeLang, setActiveLang] = useState(langOptions['eng'])

    console.log(showLangOptions)

    async function handleSubmit() {
        console.log(search)
    }

  
    return (
        <> 
            <nav className="nav-bar">

                <div className="nav-left">
                    <div>
                        <ul className="brand-name">
                            <li>e</li>
                            <li className="sp">C</li>
                            <li>o</li>
                            <li>m</li>
                            <li>m</li>
                            <li>e</li>
                            <li>r</li>
                            <li>c</li>
                            <li>e</li>
                        </ul>
                    </div>
                    <div className="nav-track">
                        <NavLink className="track-order-link" to="#">
                            <p>Track</p>
                            <h4>Your Orders</h4>
                        </NavLink>
                    </div>
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
                    <div className="lang-box"
                        onBlur={() => setShowLangOptions(false)}
                        tabIndex={0}
                        onMouseLeave={() => setShowLangOptions(false)}
                    >
                        <img 
                            src={activeLang.flag}
                            className="lang-img"
                            onMouseOver={() => setShowLangOptions((prev) => !prev)}
                        />
                        {
                            showLangOptions 
                            && <div 
                                className="lang-options-box"
                                >
                                {Object.values(langOptions).map((option, index) => (
                                    <div 
                                        key={'lang-option-' + index}
                                        className="lang-option"
                                        onClick={() => {
                                            setShowLangOptions(false)
                                            setActiveLang(option)
                                        }} 
                                    >
                                        <img 
                                            src={option.flag}
                                            className="lang-img"
                                        />
                                        <p>{option.code}</p>
                                    </div>
                                ))}
                               
                            </div>
                        }
                    </div>

                    

                    <div className="nav-account">
                        <NavLink className="register" to="#">
                            <p>Sign into</p>
                            <h4>Account</h4>
                        </NavLink>
                    </div>

                    <div className="nav-cart-box">
                       
                            <FontAwesomeIcon 
                                icon={faCartShopping}
                                className="cart-icon"
                            />
                      
                        <p>(1)</p>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar