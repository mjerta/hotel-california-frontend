import "./SearchInput.css"

function SearchInput({placeHolder, className}) {
  return (
    <input
      className={`search-input${className ? className : ''}`}
      placeholder={placeHolder}
      type={"text"}
    />
  )
}

export default SearchInput;