import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

// import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path ='/login'>
         <Login/>
        </Route>
        <Route path ='/checkout'>
          <Header/>
          <Checkout />
        </Route>
        <Route path ='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
