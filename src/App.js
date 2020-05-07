import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //Reititys
import Menubar from "./nav/Menubar";
import PostTest from "./components/PostTest";
import SurveysPage from "./components/SurveysPage";
import SurveyQuestions from "./components/SurveysQuestions";
import Answers from "./components/Answers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubar />
        <Switch>
          <Route exact path="/" component={SurveysPage} />
          <Route exact path="/posttest" component={PostTest} />
          <Route path="/survey/:id" component={SurveyQuestions} />
          <Route path="/answers" component={Answers} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
