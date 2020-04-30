import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //Reititys
import Menubaari from "./navigaatio/Menubaari";
import PostTest from "./components/PostTest";
import SurveysPage from "./components/SurveysPage";
import SurveyQuestions from "./components/SurveysQuestions";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" component={SurveysPage} />
          <Route exact path="/posttest" component={PostTest} />
          <Route path="/survey/:id" component={SurveyQuestions} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
