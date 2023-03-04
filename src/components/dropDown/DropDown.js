import './DropDown.css'

const DropDown = ({section}) => {
  console.log('Section :', section)
  return <option className="drop-down" value={section}> Section: {section} </option>
}

export default DropDown
