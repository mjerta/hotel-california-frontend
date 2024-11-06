import "./RemoveButton.css"
import "./Variants.css"
import deleteIcon from "../../../assets/remove-btn.svg"

function RemoveButton({className, alt, onClick, tabIndex}) {
  return (
      <img
        tabIndex={tabIndex}
        alt={alt}
        src={deleteIcon}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        onClick={onClick}
        className={`remove-button ${className ? className : ''}`}
      />
  )
}
export default RemoveButton;