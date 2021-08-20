import React from 'react';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Register from './components/User/Register';
import Events from './components/Events';
import Subscription from './components/Subscription';

import Splash from './components/Splash';

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

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/subscribe" component={Subscription} />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;