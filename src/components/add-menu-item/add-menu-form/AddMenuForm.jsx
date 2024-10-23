import "./AddMenuForm.css"
import FormGroup from "../../forms/form-elements/form-group/FormGroup.jsx";
import FormGroupFileButton
  from "../../forms/form-elements/form-group-file-button/FormGroupFileButton.jsx";

function AddMenuForm({className}) {
  return (
    <form className={`add-menu-form ${className ? className : ''}`}>

      <FormGroup
        name={"menuName"}
        type={"text"}
        labelText={"Menu name:"}
        labelAndID={"menu-name"}
        className={"form-groud-add-menu-variant"}
        />
      <FormGroup
        name={"description"}
        type={"text"}
        labelText={"Description:"}
        labelAndID={"menu-description"}
        className={"form-groud-add-menu-variant"}
      />
      <FormGroup
        name={"ingredient"}
        type={"text"}
        labelText={"Add ingredient:"}
        labelAndID={"menu-name"}
        className={"form-groud-add-menu-variant"}
      />
      <FormGroup
        name={"price"}
        type={"text"}
        labelText={"Price:"}
        labelAndID={"menu-price"}
        className={"form-groud-add-menu-variant"}
      />
      <FormGroupFileButton
        name={"image"}
        labelAndID={"image"}
        labelText={"image"}
        />

    </form>
  )
}

export default AddMenuForm;