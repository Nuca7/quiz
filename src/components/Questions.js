import React, { useState, useEffect } from "react";
import Question from "./Question";
import Modal from "./Modal";
import { getSessionToken } from "../helperFunctions";
import { getCategoryID } from "../helperFunctions";
import { useGlobalContext } from "../Context";

const url = "https://opentdb.com/api.php";

function Questions() {
  const { filledForm } = useGlobalContext();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);

  async function fetchData() {
    const sessionToken = await getSessionToken();
    const categoryID = await getCategoryID(filledForm.category);
    const response = await fetch(
      `${url}?amount=${filledForm.amount}&category=${categoryID}&difficulty=${filledForm.difficulty}&token=${sessionToken}`
    );
    const { results: questionsArray } = await response.json();
    setQuestions(questionsArray);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function checkAnswer(answer, correct_answer) {
    if (correct_answer === answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    increaseIndex(currentIndex);
  }

  function increaseIndex(currentIndex) {
    if (currentIndex >= questions.length - 1) {
      setShowModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="questionsContainer">
      <p>{`${correctAnswers} / ${questions.length}`}</p>
      <Question checkAnswer={checkAnswer} {...questions[currentIndex]} />
      {showModal && (
        <Modal
          questionsNumber={questions.length}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
}

export default Questions;