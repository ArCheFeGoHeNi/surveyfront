import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //Reititys
import Menubaari from './navigaatio/Menubaari';
import FetchQuestions from './components/FetchQuestions';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" exact component={ FetchQuestions }/>
             
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
