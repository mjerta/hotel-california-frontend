import "./AddMenuForm.css"
import FormGroup from "../../forms/form-elements/form-group/FormGroup.jsx";
import FormGroupFileButton
  from "../../forms/form-elements/form-group-file-button/FormGroupFileButton.jsx";
import {useState} from "react";
import FormGroupButton
  from "../../forms/form-elements/form-group-button/FormGroupButton.jsx";
import FormGroupArray
  from "../../forms/form-elements/form-group-array/FormGroupArray.jsx";
import {useForm} from "react-hook-form";

function AddMenuForm({className}) {
  const [previewUrlPhoto, setPreviewUrlPhoto] = useState('');
  const [image, setImage] = useState([]);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();




  function onSubmit(data) {
    console.log(data);
    console.log(image)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className={`add-menu-form ${className ? className : ''}`}>
      <FormGroup
        name={"menuName"}
        type={"text"}
        labelText={"Menu name:"}
        labelAndID={"menu-name"}
        className={"form-group-add-menu-variant"}
        register={register("menuName", {
          required: "Menu name is required",
        })}
        required={true}
        errors={errors}
      />
      <FormGroup
        name={"description"}
        type={"text"}
        labelText={"Description:"}
        labelAndID={"menu-description"}
        className={"form-group-add-menu-variant"}
        register={register("description", {
          required: "Description is required",
        })}
      />
      <FormGroupArray
        name={"ingredients"}  // name of the field array
        type={"text"}
        labelText={"Add ingredient:"}
        labelAndID={"ingredient"}
        className={"form-group-add-menu-variant"}
        required={true}
        control={control} // pass control from useForm
      />
      <FormGroup
        name={"price"}
        type={"text"}
        labelText={"Price:"}
        labelAndID={"menu-price"}
        className={"form-group-add-menu-variant"}
        required={true}
      />
      <FormGroupFileButton
        name={"image"}
        labelAndID={"image"}
        setImage={setImage}
        labelText={"image:"}
        btnText={"Choose file"}
        setValue={setValue}
        setPreviewUrlPhoto={setPreviewUrlPhoto}
        required={true}
        register={register("image", {
          required: "Image is required",
        })}
        errors={errors}
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