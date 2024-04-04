import { FaStar } from "react-icons/fa";
import { imageUrl } from "../utils/mockData";

export const Card = (props) => {
  // obj destructring
  const {name, avgRating, deliveryTime, cuisines, locality, cloudinaryImageId} = props.resDetails;

  return (
    <div className="cards">
      <img
        src={`${imageUrl}${cloudinaryImageId}`}
        alt=""
      />
      <div className="hotel-info">
        <h2>{name}</h2>
        <span>
          <FaStar />
          {avgRating} | {deliveryTime}
        </span>
        <span>{cuisines}</span>
        <span>{locality}</span>
      </div>
    </div>
  );
};
