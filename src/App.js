import './App.css';
import HomePage from './components/homepage/HomePage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Navbar from './components/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import ClassCreation from './components/classes/ClassCreation';
import ClassesList from './components/classes/ClassesList';
function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route exact path="/welcome">
            <HomePage />
          </Route>

          <Route path="/login">
            <Navbar />
            <Login />
          </Route>

          <Route path="/sign-up">
            <Navbar />
            <SignUp />
          </Route>

          <Route path="/create-class">
            <Navbar />
            <ClassCreation />
          </Route>

          <Route path="/classes">
            <Navbar />
            <ClassesList />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
