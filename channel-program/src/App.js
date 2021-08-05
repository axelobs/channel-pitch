import React from 'react';
import Home from './components/Home';
import Header from './components/common/Header';
import Register from './components/User/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;