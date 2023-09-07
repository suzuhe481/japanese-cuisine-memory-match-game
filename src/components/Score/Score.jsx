import "./Score.css";

const totalCards = 12;

function Score({ cardsPicked, cardCorrect }) {
  // Calculates score of remaining cards.
  const score = totalCards - cardsPicked.length;

  // Determines which icon should be displayed on screen.
  var correctIcon;
  var incorrectIcon;
  if (typeof cardCorrect === "undefined") {
    correctIcon = "";
    incorrectIcon = "";
  } else {
    correctIcon = cardCorrect && <i className="fa-solid fa-check fa-beat"></i>;
    incorrectIcon = !cardCorrect && <i className="fa-solid fa-x fa-shake"></i>;
  }

  return (
    <div className="score-container">
      <div id="correct-icon">{correctIcon}</div>
      <div className="score">Cards Left: {score}</div>
      <div id="incorrect-icon">{incorrectIcon}</div>
    </div>
  );
}

export default Score;
