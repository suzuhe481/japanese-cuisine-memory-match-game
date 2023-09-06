import "./Score.css";

const totalCards = 12;

function Score({ cardsPicked }) {
  // console.log("cardsPicked", cardsPicked);
  const score = totalCards - cardsPicked.length;
  // console.log("score", score);

  return (
    <div className="score-container">
      <div id="correct-icon">O</div>
      <div className="score">Cards Left: {score}</div>
      <div id="incorrect-icon">X</div>
    </div>
  );
}

export default Score;
