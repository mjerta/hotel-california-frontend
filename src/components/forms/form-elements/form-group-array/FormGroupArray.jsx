import "./FormGroupArray.css"
import AddButton from "../../../general-components/add-button/AddButton.jsx";
import RemoveButton
  from "../../../general-components/remove-button/RemoveButton.jsx";
import {Controller, useFieldArray} from "react-hook-form";
import {useEffect} from "react";

function FormGroupArray({
                          control,
                          name,
                          labelAndID,
                          labelText,
                          type,
                          className,
                          required,
                          tabIndex
                        }) {

  const {fields, append, remove,} = useFieldArray({
    control,
    name,
  })

  useEffect(() => {
    if (fields.length === 0) {
      remove(0) // I put this to make sure it wont add twice because of the react strict
      append({value: ''})
    }
  }, []);

  return (
    <div className={`form-group-array ${className ? className : ''}`}>
      <AddButton
        tabIndex={0}
        className={"add-button-add-menu"}
        onClick={() => append({value: ""})}/>
      {fields.length > 1 && (
        <RemoveButton
          tabIndex={0}
          className={"remove-button-add-menu"}
          onClick={() => remove(fields.length - 1)}
        />
      )}
      <label className={required && "asterisk"}
             htmlFor={labelAndID}>{labelText}</label>
      <div className="input-group">
        {fields.map((field, index) => (
          <div key={field.id} className="input-array-item">
            <Controller
              control={control}
              name={`${name}[${index}].value`}
              defaultValue={""}
              rules={{
                required: required && "This field is required",
                minLength: {
                  value: 2,
                  message: "Ingredient must be at least 2 characters long"
                },
                maxLength: {
                  value: 20,
                  message: "Menu name cannot exceed 20 characters"
                }
              }}
              render={({field, fieldState: {error}}) => (
                <>
                  <input
                    tabIndex={tabIndex}
                    type={type}
                    {...field}
                    autoComplete="off"
                    id={`${labelAndID}-${index}`}
                  />
                  {error &&
                    <p className="error-message-start">{error.message}</p>}
                </>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormGroupArray;