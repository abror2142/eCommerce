import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrochip, faBook, faHome, faLaptop, faMobile, faShirt, faShoePrints, faBaby, faHandHoldingHand, faHandHoldingHeart, faBlender, faFutbol} from "@fortawesome/free-solid-svg-icons";

/* This Function Deals with All Icons in the website.
    It has mapping which maps icons to corresponded text. 
*/

const iconMapping = {
    "Electronics": faMicrochip,
    "Books": faBook,
    "Home": faHome, 
    "Laptops": faLaptop,
    "Smartphones": faMobile,
    "Clothing": faShirt,
    "Footwear": faShoePrints,
    "House & Garden": faHome,
    "For Kids": faBaby,
    "Beauty & Health": faHandHoldingHeart,
    "Home Appliances": faBlender,
    "Sports & Recreation": faFutbol
}

function FontAwesomeIcons({text, className=""}){
    let icon;
    console.log(text)
    if(iconMapping[text])
        icon = iconMapping[text]
    else
        return null

    return (
        <div className="icon">
            <FontAwesomeIcon 
                icon={icon} 
                className={className} 
            />
        </div>
    )   
}

export default FontAwesomeIcons