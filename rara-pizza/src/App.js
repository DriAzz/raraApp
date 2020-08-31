import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './styles/header.css';
import './styles/home.css';

// Components
import Header from './components/Header';

// Screens
import Home from './screens/Home';
import About from './screens/About';
import Menu from './screens/Menu';
import Apply from './screens/Apply';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div class="main-view">
          <Route exact path="/" component={ Home } />
          <Route path="/menu" component={ Menu } />
          <Route path="/about" component={ About } />
          <Route path="/apply" component={ Apply } />
        </div>
      </Router>
    </div>
  );
}

export default App;
