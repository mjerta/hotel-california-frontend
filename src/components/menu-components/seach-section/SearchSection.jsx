import "./SearchSection.css"
import SearchInput from "../../general-components/search-input/SearchInput.jsx";
import {useContext, useEffect} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";

function SearchSection({className}) {

  const {setSearchQuery} = useContext(OrderContext)

  useEffect(() => {
    return () => {
      setSearchQuery("")
    }
  }, [setSearchQuery]);

  return (
    <header className={`search-header ${className ? className : ''}`}>
      <SearchInput
        placeHolder={"What would you like to eat?"}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  )
}
export default SearchSection;