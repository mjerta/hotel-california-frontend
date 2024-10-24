import "./FormGroupButton.css"
import SubmitButton from "../submit-button/SubmitButton.jsx";

function FormGroupButton({btnClassName, textBtn, className}) {
  return (
    <>
      <div className={`form-group-submit ${className ? className : '' }`}>
        <SubmitButton
          className={btnClassName}
          text={textBtn ? textBtn : 'submit'}
        />
      </div>
    </>
  )
}

export default FormGroupButton;