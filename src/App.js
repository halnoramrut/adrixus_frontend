import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GuardCompo from './components/GuardCompo';

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <GuardCompo path="/dashboard" PassCompo={Dashboard} />  
          <Redirect exact path="/" to='/dashboard' />
          {/* <Route exact path="/" element={<Navigate replace to="/dashboard" />} /> */}
        </Switch>
      </Router>
  );
}

export default App;
