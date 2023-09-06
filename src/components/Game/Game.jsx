import Score from "../Score/Score";
import CardsContainer from "../CardsContainer/CardsContainer";

import "./Game.css";

function Game() {
  return (
    <div className="game-container">
      <Score />
      <CardsContainer />
    </div>
  );
}

export default Game;
