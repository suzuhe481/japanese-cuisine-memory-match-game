import "./Title.css";

function Title() {
  const titleText = "Memory Match Game - Japanese Cuisine";

  const rulesText =
    "Click each image only once. Make sure to remember them or you'll have to start over.";

  return (
    <div className="title-container">
      <h1 className="title-text">{titleText}</h1>
      <p className="game-rules">{rulesText}</p>
    </div>
  );
}

export default Title;
