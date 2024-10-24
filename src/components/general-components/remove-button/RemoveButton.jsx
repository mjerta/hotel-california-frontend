import "./RemoveButton.css"
import "./Variants.css"
import deleteIcon from "../../../assets/remove-btn.svg"

function RemoveButton({className, alt, onClick}) {
  return (
      <img
        alt={alt}
        src={deleteIcon}
        onClick={onClick}
        className={`remove-button ${className ? className : ''}`}
      />
  )
}

export default RemoveButton;