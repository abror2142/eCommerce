import FontAwesomeIcons from "../../utils/FontAwesomeIcons";

function DropdownButton({icon, text}){
    return (
        <button className="dropdown-button">
            <FontAwesomeIcons 
                icon={icon}
                className="dropdown-button-icon"
            />
            {text}
        </button>
    )
}

export default DropdownButton