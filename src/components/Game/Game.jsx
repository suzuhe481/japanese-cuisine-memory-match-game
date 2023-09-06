import { useState } from "react";

import Score from "../Score/Score";
import CardsContainer from "../CardsContainer/CardsContainer";

import "./Game.css";

function Game() {
  const [cardsPicked, setCardsPicked] = useState([]);

  function handleCardClicked(e) {
    const cardID = e.currentTarget.getAttribute("value");

    if (cardsPicked.includes(cardID)) {
      setCardsPicked([]);
      // reset score to 0
    } else {
      setCardsPicked([...cardsPicked, cardID]);
      // Increment score by 1
    }
  }

  return (
    <div className="game-container">
      <Score />
      <CardsContainer handleCardClicked={handleCardClicked} />
    </div>
  );
}

export default Game;
