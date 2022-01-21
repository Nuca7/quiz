import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { shuffle } from "../helperFunctions";

import "./Question.css";

function Question({
  question,
  correct_answer,
  incorrect_answers,
  checkAnswer,
}) {
  const [answers, setAnswers] = useState([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!question) return;
    setAnswers(shuffle([correct_answer, ...incorrect_answers]));
  }, [question]);

  function handleSubmit() {
    checkAnswer(answers[active], correct_answer);
    setActive(-1);
  }

  if (!question) {
    return <h2>loading...</h2>;
  }

  return (
    <article className="questionContainer">
      <h2 className="question">{decode(question)}</h2>
      {answers.map((answer, index) => {
        return (
          <p
            className={`answers ${index === active && "active"}`}
            key={index}
            onClick={() => setActive(index)}
          >
            {decode(answer)}
          </p>
        );
      })}
      <button
        className="next-button"
        disabled={active === -1}
        onClick={handleSubmit}
      >
        Next Question
      </button>
    </article>
  );
}

export default Question;
