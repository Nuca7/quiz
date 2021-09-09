import React, { useContext, useState } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const categories = [
    "General Knowledge",
    "Science: Computers",
    "Entertainment: Comics",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
    "Entertainment: Television",
    "Art",
    "Animals",
    "Celebrities",
  ];
  const difficulty = ["easy", "medium", "hard"];
  const [filledForm, setFilledForm] = useState({
    amountOfQuestions: 10,
    category: categories[0],
    difficultyLevel: difficulty[0],
  });

  return (
    <MyContext.Provider
      value={{
        categories,
        difficulty,
        filledForm,
        setFilledForm,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(MyContext);
}

export { ContextProvider, useGlobalContext };
