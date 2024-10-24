import "./AddButton.css"
import "./Variants.css"
import addButton from "../../../assets/add-button.svg";

function AddButton({className, onClick}) {
  return (
    <img
      onClick={onClick}
      className={`add-button ${className ? className : ''}`}
      src={addButton}
      alt={"add-button"}
    />
  )
}

export default AddButton;