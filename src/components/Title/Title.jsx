import "./Title.css";

function Title() {
  const rulesText =
    "Click each image only once. Make sure to remember them or you'll have to start over.";

  return (
    <div className="title-container">
      <h1 className="title-text">Memory Match Game - Japanese Cuisine</h1>
      <p className="game-rules">{rulesText}</p>
    </div>
  );
}

export default Title;
