import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFutbol, faMicrochip, faBook, faBaby, faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";

function BottomBar(){
    return (
        <div className="navbar-bottom">
            <a className="category-box">
                <FontAwesomeIcon 
                    icon={faMicrochip} 
                    className="nav-icon"
                />
                <p>Electronics</p>
            </a>
            <a className="category-box">
                <FontAwesomeIcon 
                    className="nav-icon"
                    icon={faBook}
                />
                <p>Books</p>
            </a> 
            <a className="category-box">
                <FontAwesomeIcon 
                    icon={faBaby}
                    className="nav-icon"
                />
                <p>Baby</p>
            </a>
            <a className="category-box">
                <FontAwesomeIcon 
                    icon={faHome} 
                    className="nav-icon"
                />
                <p>Home & Garden</p>
            </a>
            <a className="category-box">
                <FontAwesomeIcon 
                    icon={faGamepad}
                    className="nav-icon"
                />
                <p>Hobby & Interests</p>
            </a>
            <a className="category-box">
                <FontAwesomeIcon 
                    icon={faFutbol} 
                    className="nav-icon"
                />
                <p>Sports</p>
            </a>
            
        </div>
    )
}

export default BottomBar