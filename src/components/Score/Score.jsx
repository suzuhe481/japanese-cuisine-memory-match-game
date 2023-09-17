import { useState, useEffect } from "react";

import "./Score.css";

const totalCards = 12;
const winningScore = 0;

function winMessage() {
  return <h1>You win!</h1>;
}

function Score({ cardsPicked, cardCorrect }) {
  const [correctIconClasses, setCorrectIconClasses] = useState("");
  const [incorrectIconClasses, setIncorrectIconClasses] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

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

  // Sets the appropriate classes for the correct and incorrect icons.
  if (cardCorrect === true || cardCorrect === false) {
    if (cardCorrect && correctIconClasses === "") {
      setCorrectIconClasses(`correct-icon fa-solid fa-check fa-2x`);
      setIncorrectIconClasses("");
    } else if (!cardCorrect && incorrectIconClasses === "") {
      setIncorrectIconClasses(`incorrect-icon fa-solid fa-x fa-2x`);
      setCorrectIconClasses("");
    }
  }

  // Sets the isAnimated state to false after 1 second.
  // This prevents the font awesome animation classes from being added to icons.
  useEffect(() => {
    setIsAnimated(true);

    var timer = setTimeout(() => {
      setIsAnimated(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cardsPicked]);

  return (
    <div className="score-container">
      <div className={`win-message ${!gameWon ? "hidden" : ""}`}>
        {winningMessage}
      </div>
      <div id="correct-icon" className={`${gameWon ? "hidden" : ""}`}>
        <i
          className={`${correctIconClasses} ${isAnimated ? "fa-beat" : ""}`}
        ></i>
      </div>
      <div className={`score ${gameWon ? "hidden" : ""}`}>
        {!gameWon ? `Cards Left: ${score}` : ""}
      </div>
      <div id="incorrect-icon" className={`${gameWon ? "hidden" : ""}`}>
        <i
          className={`${incorrectIconClasses} ${isAnimated ? "fa-shake" : ""}`}
        ></i>
      </div>
    </div>
  );
}

export default Score;
