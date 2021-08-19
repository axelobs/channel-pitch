import React from 'react';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Register from './components/User/Register';
import Events from './components/Events';
import Subscription from './components/Subscription';

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
          <Route exact path="/events" component={Events} />
          <Route exact path="/subscribe" component={Subscription} />
          <Route path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;