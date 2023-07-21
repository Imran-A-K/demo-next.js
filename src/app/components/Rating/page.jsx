import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(rating);
  const decimalPart = rating - filledStars;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === filledStars && decimalPart >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center gap-4">
      <span className="flex">{renderStars()}</span> {rating}
    </div>
  );
};

export default Rating;
