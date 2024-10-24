import "./FormGroupArray.css"
import AddButton from "../../../general-components/add-button/AddButton.jsx";
import {useState} from "react";
import RemoveButton
  from "../../../general-components/remove-button/RemoveButton.jsx";

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
        onClick={() => setInputAmmount((prev) => prev + 1)}
      />
      {inputAmmount > 1 && (
        <RemoveButton
          className={"remove-button-add-menu"}
          onClick={() => setInputAmmount((prev) => prev - 1)}
          />
      )}
      <label className={required && "asterisk"}
             htmlFor={labelAndID}>{labelText}</label>
      <div className="input-group">
        {Array.from({length: inputAmmount}).map((_, i) => (
          <input
            key={i}
            type={type}
            id={labelAndID}
            {...register}
            autoComplete={"off"}
            disabled={disabled}
            value={value}
          />

        ))}
      </div>
    </div>
    {errors && errors[name] &&
      <p className="error-message">{errors[name].message}</p>}
  </>)
}

export default FormGroupArray;