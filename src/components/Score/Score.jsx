import "./Score.css";

function Score({ cardsPicked }) {
  // console.log("cardsPicked", cardsPicked);
  const score = cardsPicked.length;
  // console.log("score", score);

  return (
    <div className="score-container">
      <div id="correct-icon">O</div>
      <div className="score">Score: {score}</div>
      <div id="incorrect-icon">X</div>
    </div>
  );
}

export default Score;
