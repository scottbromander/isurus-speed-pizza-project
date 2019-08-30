import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import PizzaPage from '../pages/pizzaPage/PizzaPage';
import CustomerPage from '../pages/customerPage/CustomerPage';
import SummaryPage from '../pages/summaryPage/SummaryPage';
import AdminPage from '../pages/adminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pizza" component={PizzaPage} />
        <Route exact path="/customer" component={CustomerPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Router>
    </div>
  );
}

export default App;
