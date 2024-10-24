import "./FormGroupFileButton.css"
import {useRef, useState} from "react";
import Button from "../../../general-components/button/Button.jsx";

function FormGroupFileButton({
                               className,
                               labelAndID,
                               labelText,
                               register,
                               errors,
                               name,
                               value,
                               disabled
                             }) {

  const [previewUrlPhoto, setPreviewUrlPhoto] = useState('');
  const fileInputRef = useRef(null);

  function handleFileInputChange() {
    const file = fileInputRef.current.files[0];
    setPreviewUrlPhoto(URL.createObjectURL(file));
  }

  function handleButtonClick(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }

  return (
    <>
      <div className={`form-group-file-button ${className ? className : ''}`}>
        <label htmlFor={labelAndID}>Price</label>
        <input
          type={"file"}
          id={labelAndID}
          {...register}
          autoComplete={"off"}
          disabled={disabled}
          ref={fileInputRef}
          onChange={handleFileInputChange}
          value={value}
        />
        <img src={previewUrlPhoto} alt={"photo"} />
        <Button
          className={"confirm-order"}
          onClick={(e) => handleButtonClick(e)}
          text={"Upload"}
        />
        {errors && errors[name] &&
          <p className="error-message">{errors[name].message}</p>}
      </div>
    </>
  )
}

export default FormGroupFileButton;