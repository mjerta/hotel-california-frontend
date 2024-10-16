import "./DefaultForm.css"

function DefaultForm({children, onSubmit, className, header}) {
  return (
    <>
      <fieldset className={"form-container"}>
        <legend>{header}</legend>
        <form className={`default-form${className ? className : ''}`}
              autoComplete={"off"} onSubmit={onSubmit}>
          {children}
        </form>
      </fieldset>
    </>
  )
}

export default DefaultForm;