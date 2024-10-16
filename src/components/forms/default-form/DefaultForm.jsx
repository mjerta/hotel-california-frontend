import "./DefaultForm.css"
function DefaultForm({children, onSubmit, className}) {
  return (
    <>
      <form className={`default-form ${className ? className: ''}`} autoComplete={"off"} onSubmit={onSubmit}>
        {children}
      </form>

    </>
  )
}

export default DefaultForm;