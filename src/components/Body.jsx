import { RestaurantCards } from "./RestaurantCards";
import { Search } from "./Search";
import { restaurantList } from "../utils/mockData";
import { TopRatedRestaurants } from "./TopRatedRestaurants";
import { Card } from "./Card";
import { useState } from "react";

export const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  function filterTopRated() {
    console.log("clicked");

    let filteredRestaurantsList = restaurantList.filter(
      (restaurant) => parseFloat(restaurant.rating) > 4
    );

    setFilteredRestaurants(filteredRestaurantsList);
  }
  return (
    <>
      <Search />
      <TopRatedRestaurants filter={filterTopRated} />
      <RestaurantCards />
      <div className="restaurant-cards">
        {filteredRestaurants.map((restaurant) => (
          <Card resDetails={restaurant} />
        ))}
      </div>
    </>
  );
};
