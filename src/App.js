import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //Reititys
import Menubaari from './navigaatio/Menubaari';
import FetchQuestions from './components/FetchQuestions';
import PostTest from './components/PostTest';
import SurveysPage from "./components/SurveysPage"
import SurveyQuestions2 from "./components/SurveysQuestions2"
import SurveyQuestionsMap2 from './components/SurveysQuestions2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" component={ SurveysPage }/>
          <Route exact path="/posttest" component={ PostTest }/>
          <Route path="/survey" component={SurveyQuestionsMap2}/>
          
             
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
