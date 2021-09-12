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
    amount: 10,
    category: categories[0],
    difficulty: difficulty[0],
  });

  function handleFormChange(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setFilledForm({
      ...filledForm,
      [name]: value,
    });
  }

  return (
    <MyContext.Provider
      value={{
        categories,
        difficulty,
        filledForm,
        handleFormChange,
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
