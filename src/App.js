import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import axios from 'axios';
import authHeader from './helpers/auth-header';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.headers.common['Authorization'] = authHeader();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
