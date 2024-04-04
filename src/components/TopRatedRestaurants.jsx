// import { restaurantList } from "../utils/mockData"

export const TopRatedRestaurants = (props) => {
    // console.log(props)

    function filterRestaurants () {
        props.filter();
    }

    return(
        <>
        <button onClick={filterRestaurants}>Top Rating</button>
        </>
    )
}