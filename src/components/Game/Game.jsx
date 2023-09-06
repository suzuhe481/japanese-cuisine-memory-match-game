import Score from "../Score/Score";
import CardsContainer from "../CardsContainer/CardsContainer";

import "./Game.css";

function Game() {
  function handleCardClicked(e) {
    console.log("card was clicked");
    console.log(e.currentTarget);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.getAttribute("value"));

    const cardId = e.currentTarget.getAttribute("value");
    console.log(typeof cardId);
  }

  return (
    <div className="game-container">
      <Score />
      <CardsContainer handleCardClicked={handleCardClicked} />
    </div>
  );
}

export default Game;
