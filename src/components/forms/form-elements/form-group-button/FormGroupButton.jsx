import "./FormGroupButton.css"
import SubmitButton from "../submit-button/SubmitButton.jsx";

function FormGroupButton() {
  return (
    <>
      <div className="form-group-submit">
        <SubmitButton
          text={"submit"}
        />
      </div>
    </>
  )
}

export default FormGroupButton;