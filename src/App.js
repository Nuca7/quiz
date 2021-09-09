import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Questions from "./components/Questions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/quiz">
          <Form />
        </Route>
        <Route exact path="/quiz/questions">
          <Questions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
