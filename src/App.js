import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Balance } from './components/Balance';
import Home from './components/Home';
import Login from './components/Login';
import { Transaction } from './components/Transaction';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/transaction" component={Transaction} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
