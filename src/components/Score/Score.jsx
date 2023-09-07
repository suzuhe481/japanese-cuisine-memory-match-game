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
    correctIcon = cardCorrect && (
      <i className="correct-icon fa-solid fa-check fa-beat fa-2x"></i>
    );
    incorrectIcon = !cardCorrect && (
      <i className="incorrect-icon fa-solid fa-x fa-shake fa-2x"></i>
    );
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
