import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import './App.scss';
import CardsDiv from './components/CardsDiv';
import Create from './components/Create';
import {DataProvider} from './contexts/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          {/* <Nav/> */}
          <nav>
            <NavLink exact to='/?key=123' activeClassName="nav-selected">list</NavLink>
            <NavLink exact to='/create' activeClassName="nav-selected">create</NavLink>
          </nav>
          <Switch>
            <Route exact path='/' component={CardsDiv} />
            <Route exact path='/create' component={Create} />            
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
