import { CiSearch } from "react-icons/ci";
import { RestaurantCards } from "./RestaurantCards";



export const Body = () => {
    return(
        <>
        <div className="search-container">
        <input type="text" />
        <label htmlFor="search"><CiSearch />Search</label>
        </div>

       <RestaurantCards/>
        </>
    )
}