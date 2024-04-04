import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  function search() {
    props.searchFunction(searchText)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={(e) => {
          console.log("search is ", e.target.value);
          setSearchText(e.target.value);
        }}
      />
      <button htmlFor="search" onClick={search}><CiSearch />Search</button>
    </div>
  );
};
