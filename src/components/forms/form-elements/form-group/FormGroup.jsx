import "./FormGroup.css"

function FormGroup({type, labelAndID, labelText, register, errors, name, className}) {
  return (
    <>
      <div className={`form-group${className ? className: ''}`}>
        <label htmlFor={labelAndID}>{labelText}</label>
        <input
          type={type}
          id={labelAndID}
          {...register}
          autoComplete={"off"}
        />
      </div>
      {errors && errors[name] &&
        <p className="error-message">{errors[name].message}</p>}
    </>
  )
}

export default FormGroup;