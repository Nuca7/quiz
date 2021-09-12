import React from "react";
import { useGlobalContext } from "../Context";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const { categories, difficulty, filledForm, handleFormChange } =
    useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/quiz/questions");
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="quiz-form">
        <h2>Quiz</h2>
        {/* number of questions */}
        <div>
          <label htmlFor="questionsAmount">Number Of Questions</label>
          <input
            type="number"
            name="amount"
            id="questionsAmount"
            value={filledForm.amount}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        {/* category */}
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={filledForm.category}
            onChange={(e) => handleFormChange(e)}
          >
            {categories.map((category, index) => {
              // const { id, name } = category;
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        {/* difficulty */}
        <div>
          <label htmlFor="difficultyLevel">Difficulty</label>
          <select
            name="difficulty"
            id="difficultyLevel"
            value={filledForm.difficulty}
            onChange={(e) => handleFormChange(e)}
          >
            {difficulty.map((difficultyLevel, index) => {
              return (
                <option key={index} value={difficultyLevel}>
                  {difficultyLevel}
                </option>
              );
            })}
          </select>
        </div>

        <button className="submitBtn" type="submit">
          submit
        </button>
      </form>
    </main>
  );
}

export default Form;
