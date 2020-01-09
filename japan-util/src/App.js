import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Calculator from './container/calculator/calculator';
import Pension from './container/pension/pension';
import Header from './components/navigation/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/calculator' component={Calculator} />
        <Route path='/pension' component={Pension} />
      </Switch>
    </div>
  );
}

export default App;
