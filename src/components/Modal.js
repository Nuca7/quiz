import React from "react";
import { useHistory } from "react-router-dom";

function Modal({ questionsNumber, correctAnswers }) {
  let history = useHistory();

  function playAgain() {
    history.push("/quiz");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Finished</h2>
        <p>
          You answered {correctAnswers} out of {questionsNumber}
        </p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Modal;
