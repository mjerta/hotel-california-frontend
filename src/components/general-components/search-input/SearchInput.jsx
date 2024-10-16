import "./SearchInput.css"

function SearchInput({placeHolder, className}) {
  return (
    <div className={"input-wrapper"}>
      <input
        className={`search-input${className ? className : ''}`}
        placeholder={placeHolder}
        type={"text"}
      />
    </div>
  )
}

export default SearchInput;