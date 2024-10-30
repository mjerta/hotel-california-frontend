import "./InputTable.css"

function InputTable({status, onChange, currentLocation, text, valid, noLocationsFound}) {
  return (
    <input disabled={status || noLocationsFound}
           onChange={onChange}
           type={"text"}
           placeholder={status ? currentLocation : text}
           className={`input-table ${valid ? 'valid' : ''}`}
    />
  )
}

export default InputTable;