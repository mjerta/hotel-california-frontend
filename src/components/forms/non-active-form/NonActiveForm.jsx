import "./NonActiveForm.css"
import "../form-elements/form-group/Variants.css"

function NonActiveForm({classname, children}) {
  return (
    <form className={`non-active-form ${classname ? classname : ''}`}>
      {children}
    </form>
  )
}

export default NonActiveForm;