import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "app/redux/createStore";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

const App = () => {
  return (<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Homess</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <span>Home</span>
        </Route>
        <Route path="/old-match">
          <Redirect to="/will-match" />
        </Route>
        <Route path="/will-match">
          <span>Match</span>
        </Route>
        <Route path="*">
          <span>Not Match</span>
        </Route>
      </Switch>
    </div>
  </Router>);
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector("#root"));
