import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
