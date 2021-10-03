import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FullScratch } from "./pages/FullScratch";
import { ReactHookForm } from "./pages/ReactHookForm";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ul>
            <li>
              <Link to="/full-scratch">full-scratch</Link>
            </li>

            <li>
              <Link to="/react-hook-form">react-hoo-form</Link>
            </li>
          </ul>
        </Route>
        <Route exact path="/full-scratch">
          <FullScratch />
        </Route>
        <Route exact path="/react-hook-form">
          <ReactHookForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
