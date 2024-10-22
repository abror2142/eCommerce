import FontAwesomeIcons from "../../utils/FontAwesomeIcons"

function DropdownItem({item}) {
    const {icon, text} = item
    return (
        <div className="dropdown-item">
            <FontAwesomeIcons icon={icon} />
            <p>{text}</p>
        </div>
    )
}

export default DropdownItem