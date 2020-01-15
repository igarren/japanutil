import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import ImmigrationCalculator from './container/ImmigrationCalculator/ImmigrationCalculator';
import Pension from './container/pension/pension';
import Header from './components/navigation/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/immig-calc' component={ImmigrationCalculator} />
        <Route path='/pension' component={Pension} />
      </Switch>
    </div>
  );
}

export default App;
