import React from "react";
import { useNavigate } from "react-router-dom";

import "./Modal.css";

function Modal({ questionsNumber, playerPoints }) {
  let navigate = useNavigate();

  function playAgain() {
    navigate("/quiz");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Finished</h2>
        <p>
          You answered {playerPoints} out of {questionsNumber}
        </p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Modal;
