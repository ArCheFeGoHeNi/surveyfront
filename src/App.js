import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //Reititys
import Menubaari from './navigaatio/Menubaari';
import FetchQuestions from './components/FetchQuestions';
import PostTest from './components/PostTest';
import SurveysPage from "./components/SurveysPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" component={ FetchQuestions }/>
          <Route exact path="/posttest" component={ PostTest }/>
          <Route path="/survey"/> {/*WIP*/ }
          
             
        </Switch>
        <SurveysPage/> {/*testibois*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
