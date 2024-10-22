import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrochip, faBook, faHome, faLaptop, faPhone} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
    "electronics": faMicrochip,
    "book": faBook,
    "home": faHome, 
    "laptop": faLaptop,
    "phone": faPhone
}

function FontAwesomeIcons({icon, className=""}){
    let iconItem;

    if(iconMapping[icon])
        iconItem = iconMapping[icon]
    else
        return null

    return (
        <div className="icon">
            <FontAwesomeIcon 
                icon={iconItem} 
                className={className} 
            />
        </div>
    )   
}

export default FontAwesomeIcons