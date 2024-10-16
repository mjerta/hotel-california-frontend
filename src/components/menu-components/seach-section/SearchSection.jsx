import "./SearchSection.css"
import SearchInput from "../../general-components/search-input/SearchInput.jsx";

function SearchSection({className}) {
  return (
    <header className={`search-header${className ? className : ''}`}>
      <SearchInput
        placeHolder={"What would you like to eat?"}
      />
    </header>

  )
}

export default SearchSection;