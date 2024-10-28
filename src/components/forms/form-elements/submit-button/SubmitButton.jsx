import "./SubmitButton.css"
import "./Variants.css"
function SubmitButton({className, text}) {
  return (
    <>
      <button tabIndex={0} type="submit" className={`submit-button ${className ? className : ''}`}>
        {text}
      </button>
    </>
  )
}
export default SubmitButton;