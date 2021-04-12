import axios from '../utils/Axios';

export const sendAppointmentData = (clinicInfo) => {
	return (dispatch) => {
        let authToken = localStorage.getItem('AUTH_TOKEN')
		dispatch(sendingAppointmentData());
		return axios({
            method:'POST',
            url : '/clinics/add-appointment',
            headers : {
                'Authorization' : `Bearer ${authToken}`
            },
            data:clinicInfo
        }).then(({ data }) => {
				dispatch(appointmentSuccess(data));
			})
			.catch((err) => {
				
				dispatch(appointmentFailure('The username is already taken!'));
			});
	};
};

export const initialAppointmentState = () => {
	return {
		type: 'INITIAL_APPOINTMENT_STATE',
	};
};

export const sendingAppointmentData = () => {
	return {
		type: 'SENDING_APPOINTMENT_DATA',
	};
};

export const appointmentSuccess = (data) => {
	return {
		type: 'APPOINTMENT_SUCCESS',
		payload: data,
	};
};

export const appointmentFailure = (message) => {
	return {
		type: 'APPOINTMENT_FAILURE',
        payload : message
	};
};
