import FontAwesomeIcons from "../../utils/FontAwesomeIcons";

function DropdownButton({text}){
    return (
        <div className="dropdown-button">
            <FontAwesomeIcons 
                text={text}
                className="dropdown-button-icon"
            />
            <p>
                {text}
            </p>
        </div>
    )
}

export default DropdownButton