import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
