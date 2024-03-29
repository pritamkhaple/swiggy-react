import { FaStar } from "react-icons/fa";
import { imageUrl } from "../utils/mockData";

export const Card = (props) => {
  // obj destructring
  const {name, rating, deliveryTime, cuisines,location, imageId} = props.resDetails;

  return (
    <div className="cards">
      <img
        src={`${imageUrl}${imageId}`}
        alt=""
      />
      <div className="hotel-info">
        <h2>{name}</h2>
        <span>
          <FaStar />
          {rating} | {deliveryTime}
        </span>
        <span>{cuisines}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};
