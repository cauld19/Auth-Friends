import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {




  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/protected">Protected</Link>
        <br />

        <Switch>
          <PrivateRoute exact path ="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
