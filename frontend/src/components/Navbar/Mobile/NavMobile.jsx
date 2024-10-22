import { useState } from "react";

import { faArrowTrendUp, faBaby, faBars, faBlender, faBook, faBowlFood, faCar, faCat, faChevronDown, faHome, faCouch, faFire, faHandHoldingHeart, faHeartCirclePlus, faMicrochip, faPersonHiking, faSearch, faShirt, faShoePrints, faTableTennis, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../../assets/fonus-logo.png";
import Dropdown from "../../Dropdown/Dropdown";

function NavMobile() {
    
    const [showCategories, setShowCategories] = useState(false)

    const items =[ {
        icon: "laptop",
        text: "Laptop"
    }]

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
            <div className="categories-box dim">
                <div className="nav-mobile-top">
                    <div className="title">
                        <p>
                            Enjoy Your Shopping!
                        </p>
                    </div>
                    <div className="btn">
                        <FontAwesomeIcon 
                            icon={faX} 
                            onClick={() => setShowCategories((prev) => !prev)}
                        />
                    </div>
                </div>
                
                <Dropdown icon="laptop" text="Laptop" items={items} />


                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faFire}
                            className="color-red"
                        />
                        <a>Hot Deals!</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faArrowTrendUp}
                            className="color-red"
                        />
                        <a>Trending</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category dropdown">
                    <div className="title" id="electronics">
                        <div className="category-mobile-box">
                            <FontAwesomeIcon 
                                icon={faMicrochip}
                                className="color-red"
                            />
                            <a>Electronics</a>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="dropdown-content">

                        <div className="category-mobile-dropdown-box">
                            <FontAwesomeIcon 
                                icon={faMicrochip}
                                className="color-red"
                            />
                            <a>Smarthones</a>
                        </div>
                        
                        <div className="category-mobile-dropdown-box">
                            <FontAwesomeIcon 
                                icon={faMicrochip}
                                className="color-red"
                            />
                            <a>Laptops</a>
                        </div>
                    </div>

                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faShirt}
                            className="color-red"
                        />
                        <a>Clothing</a>
                    </div> 
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faShoePrints}
                            className="color-red"
                        />
                        <a>Footwear</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faHome}
                            className="color-red"
                        />
                        <a>Home & Garden</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBaby}
                            className="color-red"
                        />
                        <a>For Kids</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faHandHoldingHeart}
                            className="color-red"
                        />
                        <a>Beauty & Health</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBlender}
                            className="color-red"
                        />
                        <a>Home Apliances</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faTableTennis}
                            className="color-red"
                        />
                        <a>Sports & Recreation</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faHeartCirclePlus}
                            className="color-red"
                        />
                        <a>Pharmacy</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                
                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faCat}
                            className="color-red"
                        />
                        <a>Pet Products</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBook}
                            className="color-red"
                        />
                        <a>Books</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faPersonHiking}
                            className="color-red"
                        />
                        <a>Tourism, fishing, hunting</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faCar}
                            className="color-red"
                        />
                        <a>Car Products</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faCouch}
                            className="color-red"
                        />
                        <a>Furniture</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBowlFood}
                            className="color-red"
                        />
                        <a>Food</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBowlFood}
                            className="color-red"
                        />
                        <a>Food</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBowlFood}
                            className="color-red"
                        />
                        <a>Food</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="nav-mobile-category">
                    <div className="category-mobile-box">
                        <FontAwesomeIcon 
                            icon={faBowlFood}
                            className="color-red"
                        />
                        <a>Food</a>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            }
        </div>
    )
}

export default NavMobile