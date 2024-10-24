import "./AddMenuForm.css"
import FormGroup from "../../forms/form-elements/form-group/FormGroup.jsx";
import FormGroupFileButton
  from "../../forms/form-elements/form-group-file-button/FormGroupFileButton.jsx";
import {useState} from "react";
import FormGroupButton
  from "../../forms/form-elements/form-group-button/FormGroupButton.jsx";

function AddMenuForm({className}) {
  const [previewUrlPhoto, setPreviewUrlPhoto] = useState('');
  const [image, setImage] = useState([]);
  console.log(image)

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
        labelText={"image:"}
        btnText={"Choose file"}
        setPreviewUrlPhoto={setPreviewUrlPhoto}
      />
      <div className="img-container">{
        previewUrlPhoto && (
          <img src={previewUrlPhoto} alt=""/>
        )

      }
      </div>
      <FormGroupButton
        className={"form-group-submit-add-menu"}
        btnClassName={"submit-button-add-menu"}
        textBtn={"save"}
        />

    </form>
  )
}

export default AddMenuForm;