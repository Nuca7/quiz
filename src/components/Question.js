import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { shuffle } from "../helperFunctions";

function Question({
  question,
  correct_answer,
  incorrect_answers,
  checkAnswer,
}) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (!question) return;
    setAnswers(shuffle([correct_answer, ...incorrect_answers]));
  }, [question]);

  if (!question) {
    return <h2>loading...</h2>;
  }

  return (
    <article className="questionContainer">
      <h2 className="question">{decode(question)}</h2>
      {answers.map((answer, index) => {
        return (
          <button
            className="answers"
            key={index}
            onClick={() => checkAnswer(answer, correct_answer)}
          >
            {decode(answer)}
          </button>
        );
      })}
    </article>
  );
}

export default Question;
