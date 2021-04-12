import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import { authReducer } from './reducers/auth_reducers';
import { adminReducer } from './reducers/admin_reducer';
import { signUpReducer } from './reducers/signup_reducer'
import {clinicReducer} from './reducers/clinic_info_reducers'
import {doctorReducer} from './reducers/doctor_reducer'
import {paymentReducer} from './reducers/payment_reducer'
import {patientReducer} from './reducers/patient_reducer'

import {Provider} from 'react-redux'
import { appointmentReducer } from './reducers/appointment_reducer';

const store = createStore(combineReducers({authState:authReducer, adminState:adminReducer, signUpState : signUpReducer, clinicState:clinicReducer, appointmentState : appointmentReducer, doctorState : doctorReducer, paymentState : paymentReducer, patientState : patientReducer}), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
