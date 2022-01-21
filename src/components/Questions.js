import React, { useState, useEffect } from "react";
import Question from "./Question";
import Modal from "./Modal";
import { getSessionToken, getCategoryID, getQuestions } from "../api";
import { useGlobalContext } from "../Context";

import "./Questions.css";

function Questions() {
  const { filledForm } = useGlobalContext();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [showModal, setShowModal] = useState(false);

  async function fetchData() {
    const { amount, category, difficulty } = filledForm;
    const sessionToken = await getSessionToken();
    let categoryURL, difficultyURL;

    if (category !== "Any Category") {
      const categoryID = await getCategoryID(category);
      categoryURL = `&category=${categoryID}`;
    }

    if (difficulty !== "Any Difficulty") {
      difficultyURL = `&difficulty=${difficulty}`;
    }

    const { results } = await getQuestions(
      amount,
      categoryURL,
      difficultyURL,
      sessionToken
    );
    setQuestions(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function checkAnswer(answer, correct_answer) {
    if (correct_answer === answer) {
      setPlayerPoints(playerPoints + 1);
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
      <p>{`${playerPoints} / ${questions.length}`}</p>
      <Question checkAnswer={checkAnswer} {...questions[currentIndex]} />
      {showModal && (
        <Modal questionsNumber={questions.length} playerPoints={playerPoints} />
      )}
    </div>
  );
}

export default Questions;
