import "./FormGroupFileButton.css"
import {useRef} from "react";
import Button from "../../../general-components/button/Button.jsx";

function FormGroupFileButton({
                               className,
                               labelAndID,
                               labelText,
                               register,
                               errors,
                               name,
                               value,
                               disabled,
                               setPreviewUrlPhoto,
                               btnText,
                               required,
                               setValue
                             }) {

  const fileInputRef = useRef(null);


  function handleFileInputChange() {
    const file = fileInputRef.current.files[0];
    setValue(name, file)
    setPreviewUrlPhoto(URL.createObjectURL(file));
  }

  function handleButtonClick(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }

  return (
    <>
      <div className={`form-group-file-button ${className ? className : ''}`}>
        <label className={required && 'asterisk'}
               htmlFor={labelAndID}>{labelText}</label>
        <input
          name={name}
          type={"file"}
          id={labelAndID}
          {...register}
          autoComplete={"off"}
          disabled={disabled}
          ref={fileInputRef}
          onChange={handleFileInputChange}
          value={value}
        />
        <Button
          className={"upload-image"}
          onClick={(e) => handleButtonClick(e)}
          text={btnText}
        />
        {errors && errors[name] &&
          <p className="error-message-start">{errors[name].message}</p>}
      </div>
    </>
  )
}

export default FormGroupFileButton;