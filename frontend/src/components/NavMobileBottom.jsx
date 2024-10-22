import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBox, faHeart, faCartShopping, faCar, faBars } from "@fortawesome/free-solid-svg-icons"
function NavMobileBottom() {
    return (
        <div className="nav-mobile-bottom" id="site">
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faBars} 
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
                    icon={faCartShopping} 
                />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faBox} 
                />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="nav-mobile-icon"
                    icon={faHeart} 
                />
            </div>
        </div>
    )
}

export default NavMobileBottom