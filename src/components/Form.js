import React from "react";
import { useGlobalContext } from "../Context";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const { categories, difficulty, filledForm, setFilledForm } =
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
          <label htmlFor="questionsNumber">Number Of Questions</label>
          <input
            type="number"
            name="Number of questions:"
            id="questionsNumber"
            value={filledForm.amountOfQuestions}
            onChange={(e) =>
              setFilledForm({
                ...filledForm,
                amountOfQuestions: Number(e.target.value),
              })
            }
          />
        </div>
        {/* category */}
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category name: "
            id="category"
            onChange={(e) =>
              setFilledForm({ ...filledForm, category: e.target.value })
            }
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
            name="difficulty level: "
            id="difficultyLevel"
            value={filledForm.difficultyLevel}
            onChange={(e) =>
              setFilledForm({ ...filledForm, difficultyLevel: e.target.value })
            }
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
