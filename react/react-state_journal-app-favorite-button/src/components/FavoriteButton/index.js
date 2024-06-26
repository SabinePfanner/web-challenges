import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  // this should be a state variable
  function handleToggleFavorite() {
    setIsFavorite(!isFavorite);
    console.log("favorite button clicked");
  }

  return (
    <button
      className="favorite-button"
      onClick={handleToggleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
