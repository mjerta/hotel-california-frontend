import "./DefaultForm.css"
function DefaultForm({children, onsubmit, className}) {
  return (
    <>
      <form className={`default-form ${className ? className: ''}`} autoComplete={"off"} onSubmit={onsubmit}>
        {children}
      </form>

    </>
  )
}

export default DefaultForm;