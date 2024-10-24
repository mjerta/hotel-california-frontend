import "./FormGroupArray.css"
import AddButton from "../../../general-components/add-button/AddButton.jsx";
import {useState} from "react";

function FormGroupArray({
                          type,
                          labelAndID,
                          labelText,
                          register,
                          errors,
                          name,
                          className,
                          value,
                          disabled,
                          required
                        }) {

  const [inputAmmount, setInputAmmount] = useState(1)

  return (<>
    <div className={`form-group-array ${className ? className : ''}`}>
      <AddButton
        className={"add-button-add-menu"}
        onClick={() => setInputAmmount((prev) => prev+ 1)}
      />
      <label className={required && "asterisk"}
             htmlFor={labelAndID}>{labelText}</label>
      {Array.from({length: inputAmmount}).map((_, i) => (
        <>
          <p key={i} >test</p>
        </>
      ))}
      <input
        type={type}
        id={labelAndID}
        {...register}
        autoComplete={"off"}
        disabled={disabled}
        value={value}
      />
    </div>
    {errors && errors[name] &&
      <p className="error-message">{errors[name].message}</p>}
  </>)
}

export default FormGroupArray;