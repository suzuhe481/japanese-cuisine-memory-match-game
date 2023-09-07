import "./Score.css";

const totalCards = 12;
const winningScore = 0;

function winMessage() {
  return <h1>You win!</h1>;
}

function Score({ cardsPicked, cardCorrect }) {
  // Calculates score based on remaining cards needed.
  const score = totalCards - cardsPicked.length;

  // Determines whether a win message should be created.
  var winningMessage;
  var gameWon = false;
  if (score === winningScore) {
    gameWon = true;
    winningMessage = winMessage();
  } else {
    winningMessage = "";
  }

  // Determines which icon should be displayed on screen.
  var correctIcon;
  var incorrectIcon;
  if (typeof cardCorrect === "undefined") {
    correctIcon = "";
    incorrectIcon = "";
  } else {
    correctIcon = cardCorrect && (
      <i
        className={`correct-icon fa-solid fa-check fa-beat fa-2x ${
          gameWon ? "hidden" : ""
        }`}
      ></i>
    );
    incorrectIcon = !cardCorrect && (
      <i
        className={`incorrect-icon fa-solid fa-x fa-shake fa-2x ${
          gameWon ? "hidden" : ""
        }`}
      ></i>
    );
  }

  return (
    <div className="score-container">
      <div className={`win-message ${!gameWon ? "hidden" : ""}`}>
        {winningMessage}
      </div>
      <div id="correct-icon" className={`${gameWon ? "hidden" : ""}`}>
        {correctIcon}
      </div>
      <div className={`score ${gameWon ? "hidden" : ""}`}>
        {!gameWon ? `Cards Left: ${score}` : ""}
      </div>
      <div id="incorrect-icon" className={`${gameWon ? "hidden" : ""}`}>
        {incorrectIcon}
      </div>
    </div>
  );
}

export default Score;
