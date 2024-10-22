import { useState } from "react";

import DropdownButton from "./DropdownButton";
import DropdownItem from "./DropdownItem";

function Dropdown({icon, text, items}){

    const [open, setOpen] = useState(false)
    
    return (
        <div className="dropdown-content">
            <div 
                className=""
                onClick={() => setOpen((prev) => !prev)}
            >
                <DropdownButton 
                    icon={icon} 
                    text={text}
                
                />  
            </div>

            {/* Dropdown items */}
            {open && 
                <div>
                    {items && items.map((item) => {
                        return (<DropdownItem item={item} />)
                    })}
                </div>
            }
        </div>
    )
}

export default Dropdown