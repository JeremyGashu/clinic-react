import './App.css';
import SignInSide from './components/sign_in';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/sign_up';
import AdminPage from './components/admin_page';
import ClinicPage from './components/clinic_page';
import Appointments from './components/clinic_appointments';
import Patients from './components/clinic_patients';
import Doctors from './components/clinic_doctors';
import Payments from './components/clinic_payments';
import Footer from './components/footer';

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
    <Footer />
    </div>
  );
}

export default App;
