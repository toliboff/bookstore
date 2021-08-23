import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root'),
);
