import "./SearchInput.css"

function SearchInput({placeHolder, className, onChange}) {
  return (
    <div className={"input-wrapper"}>
      <input
        className={`search-input${className ? className : ''}`}
        placeholder={placeHolder}
        type={"text"}
        onChange={onChange}
      />
    </div>
  )
}
export default SearchInput;