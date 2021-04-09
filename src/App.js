import './App.css';
import SignInSide from './components/sign_in';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/sign_up';
import AdminPage from './components/admin_page';
import ClinicPage from './components/clinic_page';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignInSide} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/admin' component={AdminPage} />
        <Route exact path='/clinic' component={ClinicPage} />
      </Switch>
    </Router>
  );
}

export default App;
