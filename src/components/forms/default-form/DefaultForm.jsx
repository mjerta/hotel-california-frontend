import "./DefaultForm.css"

function DefaultForm({children, onSubmit, className}) {
  return (
    <>
      <fieldset className={"form-container"}>
        <legend>Login Form</legend>
        <form className={`default-form${className ? className : ''}`}
              autoComplete={"off"} onSubmit={onSubmit}>
          {children}
        </form>
      </fieldset>
    </>
  )
}

export default DefaultForm;