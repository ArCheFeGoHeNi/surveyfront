import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //Reititys
import Menubar from "./nav/Menubar";
import SurveysPage from "./components/SurveysPage";
import SurveyQuestions from "./components/SurveysQuestions";
import AnswersPage from "./components/AnswersPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Menubar />
          <Switch>
            <Route exact path="/" component={SurveysPage} />
            <Route path="/survey/:id" component={SurveyQuestions} />
            <Route path="/answers" component={AnswersPage} />
            {/*}    <Route path="answer/:id" component={SurveyAnswers} />  {*/}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
