import "./AddButton.css"
import "./Variants.css"
import addButton from "../../../assets/add-button.svg";

function AddButton({className, onClick, tabIndex}) {
  return (
    <img
      tabIndex={tabIndex}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      onClick={onClick}
      className={`add-button ${className ? className : ''}`}
      src={addButton}
      alt={"add-button"}
    />
  )
}

export default AddButton;