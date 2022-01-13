import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
     
      <NavBar/>
      <Switch>
          <Route exact path="/">
            <AllUser />
          </Route>
          <Route path="/all">
            <AllUser />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <EditUser />
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
        
      
    </Router>
  );
}

export default App;
