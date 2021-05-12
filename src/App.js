import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

import NoMatch from "./Components/NoMatch/NoMatch";
import SingleLeague from "./Components/singleLeague/singleLeague";

function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/league/:id">
            <SingleLeague />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
