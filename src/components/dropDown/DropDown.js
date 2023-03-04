import './DropDown.css'

const DropDown = ({section}) => {
  return <option className="drop-down" value={section}> {section} </option>
}

export default DropDown
