import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Questions from "./components/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<Form />} />
        <Route path="/quiz/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
