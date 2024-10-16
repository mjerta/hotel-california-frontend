import "./SubmitButton.css"
function SubmitButton({className, text}) {
  return (
    <>
      <button type="submit" className={`login-button ${className ? className : ''}`}>
        {text}
      </button>
    </>
  )
}
export default SubmitButton;