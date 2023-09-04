import "./Score.css";

function Score() {
  const score = 0;

  return (
    <div className="score-container">
      <div id="correct-icon">O</div>
      <div className="score">Score: {score}</div>
      <div id="incorrect-icon">X</div>
    </div>
  );
}

export default Score;
