import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import Menu from './component/Menu.js';
import HomePage from './component/HomePage.js';
import DriftPage from './component/DriftPage.js';
import TimeAttackPage from './component/TimeAttackPage.js';
import ForzaPage from './component/ForzaPage.js';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}