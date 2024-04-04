import { RestaurantCards } from "./RestaurantCards";
import { Search } from "./Search";
import { TopRatedRestaurants } from "./TopRatedRestaurants";
import { Card } from "./Card";
import { useState, useEffect } from "react";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);



  useEffect(() => {
    // console.log("useeffect running");
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();

    const restaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    // console.log("real data ",restaurants)
  }

  // console.log("body running");

  function filterTopRated() {
    // console.log("clicked");

    let filteredRestaurantsList = restaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4
    );

    setFilteredRestaurants(filteredRestaurantsList);

    console.log("filtering done ", filteredRestaurantsList);
  }

  function seacrhRestaurants(searchText) {
    console.log("search is ", searchText);
    let seacrhRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toUpperCase().includes(searchText.toUpperCase())
    );

    // setRestaurants(seacrhRestaurants);
    setFilteredRestaurants(seacrhRestaurants)

    console.log(seacrhRestaurants);
  }

  return (
    <>
      <div className="flx-head">
        <Search searchFunction={seacrhRestaurants} />
        <TopRatedRestaurants filter={filterTopRated} />
      </div>
      <RestaurantCards />
      <div className="restaurant-cards">
        {filteredRestaurants.map((restaurant) => (
          <Card resDetails={restaurant.info} />
        ))}
      </div>
    </>
  );
};
