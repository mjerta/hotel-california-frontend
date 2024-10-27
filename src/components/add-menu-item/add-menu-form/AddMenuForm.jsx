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
import useAddMenuItem
  from "../../../custom-hooks/api-requests/POST/useAddMenuItem.jsx";

function AddMenuForm({className, setIsUpdated}) {
  const [previewUrlPhoto, setPreviewUrlPhoto] = useState('');
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();
  const {addMenu, isLoading, error} = useAddMenuItem(setIsUpdated);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSubmit(addMenu)}
            className={`add-menu-form ${className ? className : ''}`}>
        <FormGroup
          name={"menuName"}
          type={"text"}
          labelText={"Menu name:"}
          labelAndID={"menu-name"}
          className={"form-group-add-menu-variant"}
          register={register("menuName", {
            required: "Menu name is required",
            minLength: {
              value: 4,
              message: "Menu name must be at least 4 characters"
            },
            maxLength: {
              value: 20,
              message: "Menu name cannot exceed 20 characters"
            }
          })}
          required={true}
          errors={errors}
          defaultValue={""}
        />
        <FormGroup
          name={"description"}
          type={"text"}
          labelText={"Description:"}
          labelAndID={"menu-description"}
          className={"form-group-add-menu-variant"}
          register={register("description")}
          defaultValue={""}
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
          register={register("price", {
            required: "Price is required",
            pattern: {
              value: /^[0-9]+(\.[0-9]{1,2})?$/,
              message: "Price must be a number with up to two decimal places"
            }
          })}
          required={true}
          errors={errors}
          defaultValue={""}
        />
        <FormGroupFileButton
          name={"image"}
          labelAndID={"image"}
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
    </>
  )
}

export default AddMenuForm;