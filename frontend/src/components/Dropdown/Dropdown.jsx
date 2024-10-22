import { useState } from "react";

import DropdownButton from "./DropdownButton";
import DropdownItem from "./DropdownItem";
import getUuid from "../../utils/uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({text, items}){

    const [open, setOpen] = useState(false)
    
    return (
        <div 
            className="dropdown-content"
        >
            <div 
                className="dropdown-content-main"
                onClick={() => setOpen((prev) => !prev)}
            >
                <DropdownButton 
                    text={text}
                />
                <FontAwesomeIcon icon={faChevronDown} />  
            </div>

            {/* Dropdown items */}
            {open && 
                <div>
                    {items && items.map((item, index) => {
                        return (
                            <DropdownItem 
                                text={item}
                                key={getUuid()}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Dropdown