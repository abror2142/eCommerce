import { useState } from "react";

import { faArrowTrendUp, faBaby, faBars, faBlender, faBook, faBowlFood, faCar, faCat, faChevronDown, faHome, faCouch, faFire, faHandHoldingHeart, faHeartCirclePlus, faMicrochip, faPersonHiking, faSearch, faShirt, faShoePrints, faTableTennis, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../../assets/fonus-logo.png";
import Dropdown from "../../Dropdown/Dropdown";
import getUuid from "../../../utils/uuid";
import NavMobileBottom from "./NavMobileBottom";

function NavMobile() {
    
    const [showCategories, setShowCategories] = useState(false)

    const data = [
        {
            text: "Electronics",
            items: [
                "Smartphones",
                "Laptop",
                "Gaming Laptop",
                "PC", 
                "Gaming Console"
            ]
        },
        {
            text: "Clothing",
            items: [
                "Jeans",
                "Shirts",
                "Men's fashion",
                "Women's fashion", 
                "Kids' fashion"
            ]
        },
        {
            text: "Footwear",
            items: [
                "Sneakers",
                "Shoes",
                "Boots",
                "Slippers", 
                "Sport shoes"
            ]
        },
        {
            text: "House & Garden",
            items: [
                "Home Instruments",
                "Garden kits",
            ]
        },
        {
            text: "For Kids",
            items: [
                "Toys",
                "Intelectual game sets",
                "Baby Care",
                "Books for kids", 
                "Bags"
            ]
        },
        {
            text: "Beauty & Health",
            items: [
                "Hair Care",
                "Facial Care",
                "Parfumery",
                "Cosmetics", 
                "Body Care"
            ]
        },
        {
            text: "Home Appliances",
            items: [
                "Washing Machines",
                "Blender",
                "Kitchen Appliances",
                "Climate Technology", 
                "Catering Equipments"
            ]
        },
        {
            text: "Sports & Recreation",
            items: [
                "Sports Nutrition",
                "Cycling",
                "Skateboarding",
                "Simulators", 
                "Cardio"
            ]
        }
    ]

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
                   
                    <div className="nav-mobile-dropdown">
                        {data && data.map((item, key) => {
                            return (
                                <Dropdown 
                                    key={getUuid()} 
                                    text={item.text} 
                                    items={item.items} 
                                />
                            )
                        })}
                    </div>
                </div>
            }
              
            <NavMobileBottom />
                
        </div>
    )
}

export default NavMobile