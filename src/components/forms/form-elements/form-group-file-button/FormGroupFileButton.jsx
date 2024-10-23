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

  const [fileName, setFileName] = useState("Choose a file");
  const fileInputRef = useRef(null);

  function handleFileInputChange() {
    const file = fileInputRef.current.files[0];
    if (file) {
      setFileName(file.name); // Update the filename state
    } else {
      setFileName('Choose a file'); // Reset the filename if no file is selected
    }
  }

  function handleButtonClick(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }

  return (
    <>
      <div className={`form-group-file-button ${className ? className : ''}`}>
        <label htmlFor={labelAndID}>{fileName}</label>
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
        <Button
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