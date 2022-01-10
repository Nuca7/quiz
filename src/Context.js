import React, { useContext, useEffect, useState } from "react";
import { getCategories } from "./api";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [categories, setCategories] = useState(["Any Category"]);
  const difficulty = ["Any Difficulty", "easy", "medium", "hard"];
  const [filledForm, setFilledForm] = useState({
    amount: 10,
    category: categories[0],
    difficulty: difficulty[0],
  });

  async function setData() {
    const categoriesObj = await getCategories();
    const CategoriesNames = categoriesObj.map((category) => category.name);
    setCategories([...categories, ...CategoriesNames]);
  }

  useEffect(() => {
    setData();
  }, []);

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
