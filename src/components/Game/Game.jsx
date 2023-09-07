import { useState } from "react";

import Score from "../Score/Score";
import CardsContainer from "../CardsContainer/CardsContainer";

import "./Game.css";

function Game() {
  const [cardsPicked, setCardsPicked] = useState([]);
  const [cardCorrect, setCardCorrect] = useState();

  function handleCardClicked(e) {
    const cardID = e.currentTarget.getAttribute("value");

    // cardsPicked array gets reset to empty if card was picked twice.
    if (cardsPicked.includes(cardID)) {
      setCardsPicked([]);
      setCardCorrect(false);
    }
    // Adds new cardID if card is newly picked.
    else {
      setCardsPicked([...cardsPicked, cardID]);
      setCardCorrect(true);
    }

    // cardsPicked gets sent to score to calculate score.
  }

  return (
    <div className="game-container">
      <Score cardsPicked={cardsPicked} cardCorrect={cardCorrect} />
      <CardsContainer handleCardClicked={handleCardClicked} />
    </div>
  );
}

export default Game;
