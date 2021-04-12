import axios from '../utils/Axios';
import { paymentFailure } from './payment_actions';

export const sendPatientData = (clinicInfo) => {
	return (dispatch) => {
        let authToken = localStorage.getItem('AUTH_TOKEN')
		dispatch(sendingPatientData());
		return axios({
            method:'POST',
            url : '/clinics/add-patient',
            headers : {
                'Authorization' : `Bearer ${authToken}`
            },
            data:clinicInfo
        }).then(({ data }) => {
				dispatch(patientSuccess(data));
			})
			.catch((err) => {
				
				dispatch(paymentFailure('The username is already taken!'));
			});
	};
};

export const initalPatientState = () => {
	return {
		type: 'INITIAL_PATIENT_ACTION',
	};
};

export const sendingPatientData = () => {
	return {
		type: 'SENDING_PATIENT_DATA',
	};
};

export const patientSuccess = (data) => {
	return {
		type: 'PATIENT_SUCCESS',
		payload: data,
	};
};

export const patientFailure = (message) => {
	return {
		type: 'PATIENT_FAILURE',
        payload : message
	};
};
