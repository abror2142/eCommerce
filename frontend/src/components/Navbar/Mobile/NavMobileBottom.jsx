import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBox, faHeart, faCartShopping, faHome, faBars } from "@fortawesome/free-solid-svg-icons"
function NavMobileBottom() {
    return (
        <div className="nav-mobile-bottom" id="site">
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faBox} 
                />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faUser} 
                />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faHome} 
                />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faHeart} 
                />
            </div>

            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faCartShopping} 
                />
            </div>
            
        </div>
    )
}

export default NavMobileBottom