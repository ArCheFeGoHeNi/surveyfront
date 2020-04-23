import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //Reititys
import Menubaari from './navigaatio/Menubaari';
import FetchQuestions from './components/FetchQuestions';
import PostTest from './components/PostTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" component={ FetchQuestions }/>
          <Route exact path="/posttest" component={ PostTest }/>
             
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
