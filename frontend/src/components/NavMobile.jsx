import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../assets/fonus-logo.png";

function NavMobile() {
    return (
        <div className="navbar-mobile">
            <div >
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faBars} 
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
        </div>
    )
}

export default NavMobile