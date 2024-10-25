import "./FormGroup.css"
import "./Variants.css"

function FormGroup({type, labelAndID, labelText, register, errors, name, className, value, disabled, required}) {
  return (
    <>
      <div className={`form-group ${className ? className: ''}`}>
        <label className={required && "asterisk"} htmlFor={labelAndID}>{labelText}</label>
        <input
          type={type}
          id={labelAndID}
          {...register}
          autoComplete={"off"}
          disabled={disabled}
          value={value}
          defaultValue={""}
        />
      </div>
      {errors && errors[name] &&
        <p className="error-message">{errors[name].message}</p>}

    </>
  )
}

export default FormGroup;