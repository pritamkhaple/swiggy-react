import { CiSearch } from "react-icons/ci";

export const Search = () => {
    return(
        <div className="search-container">
        <input type="text" id="search" />
        <button htmlFor="search"><CiSearch />Search</button>
        </div>
    )
}