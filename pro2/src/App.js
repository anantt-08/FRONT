import React from 'react';
import './App.css';
import { BrowserRouter as LOL, Switch, Route } from 'react-router-dom';
import Home from "./homecomponent"; 

function App() {
  return (
    <LOL>
      <Switch>
         <Route path='/' component={Home} />
      </Switch>
    </LOL>
  );
}


export default App;
