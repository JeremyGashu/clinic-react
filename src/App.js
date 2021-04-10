import './App.css';
import SignInSide from './components/sign_in';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/sign_up';
import AdminPage from './components/admin_page';
import ClinicPage from './components/clinic_page';
import Appointments from './components/appointments';
import Patients from './components/patients';
import Doctors from './components/doctors';
import Payments from './components/payments';

const App = (props) => {




  return (
    <div style={{position:'relative'}} className='App'>
      <Router>
      <Switch>
        <Route exact path='/' component={SignInSide} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/admin' component={AdminPage} />
        <Route exact path='/clinic' component={ClinicPage} />
        <Route exact path='/appointments' component={Appointments} />
        <Route exact path='/patients' component={Patients} />
        <Route exact path='/doctors' component={Doctors} />
        <Route exact path='/payments' component={Payments} />
      </Switch>
    </Router>
    {/* <Fab  onClick={handleLogOut} style={{zIndex:'1000', backgroundColor:'blue',position : 'fixed', right : '10px',bottom : '5px', padding:'3px'}}>
      <ExitToApp style={{color : 'white'}}/>
    </Fab> */}
    </div>
  );
}

export default App;
