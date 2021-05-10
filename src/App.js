import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import SingleLeague from './Components/SingleLeague/SingleLeague';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>

    <Route path="/league/:id">
      <SingleLeague />
    </Route>

</Switch>
    </Router>
      
    </div>
  );
}

export default App;
