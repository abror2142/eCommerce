import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fonusLogo from "../assets/fonus-logo.png"
import { faSearch, faUser, faBox, faHeart, faCartShopping, faList } from "@fortawesome/free-solid-svg-icons"
function MainBar(){
    return (
        <div className="navbar-main">
            {/* Logo */}
            <div className="navbar-logo">
                <img src={fonusLogo}/>
            </div>

            {/* Search Bar */}
            <div className="nav-main-middle">
                <div className="nav-category-box">
                    <FontAwesomeIcon 
                        icon={faList}
                        className="nav-category-icon"
                    />
                    <p className="nav-category-text">Categories</p>
                </div>
 
                <div className="searchbar">
                    <input 
                        className="searchbar-input"
                        placeholder="Search items..."
                    />
                    <div className="search-icon-box">
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className="search-icon"
                        />
                    </div>
                </div>
            </div>

            {/* Nav Buttons */}
            <div className="navbar-action-buttons">  
                <div className="action-box">
                    <FontAwesomeIcon 
                        icon={faUser}
                        className="nav-icon"
                    />
                    <p className="action-description">Account</p>
                </div>
                <div className="action-box">
                    <FontAwesomeIcon 
                        icon={faBox}
                        className="nav-icon"
                    />
                    <p className="action-description">Orders</p>
                </div>
                <div className="action-box">
                    <FontAwesomeIcon 
                        icon={faHeart}
                        className="nav-icon"
                    />
                    <p className="action-description">Wishes</p>
                </div>
                <div className="action-box">
                    <FontAwesomeIcon 
                        icon={faCartShopping}
                        className="nav-icon"
                    />
                    <p className="action-description">Cart</p>
                </div>
                
            </div>
        </div>
    )
}

export default MainBar