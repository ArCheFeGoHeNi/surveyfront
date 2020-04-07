import React from 'react';
//Reititys
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Menubaari from './navigaatio/Menubaari';
import FetchQuestions from './components/FetchQuestions';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menubaari />
        <Switch>
          <Route exact path="/" exact component={ FetchQuestions }/>
          <Route path="/kyselyt" />
          <Route path="/Yhteystiedot" />   
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
