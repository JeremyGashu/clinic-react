import axios from '../utils/Axios';

export const sendDoctorData = (clinicInfo) => {
	return (dispatch) => {
        let authToken = localStorage.getItem('AUTH_TOKEN')
		dispatch(sendingDoctorData());
		return axios({
            method:'POST',
            url : '/clinics/add-doctor',
            headers : {
                'Authorization' : `Bearer ${authToken}`
            },
            data:clinicInfo
        }).then(({ data }) => {
				dispatch(doctorSuccess(data));
			})
			.catch((err) => {
				
				dispatch(doctorFailure('The username is already taken!'));
			});
	};
};

export const initialDoctorState = () => {
	return {
		type: 'INITIAL_DOCTOR_STATE',
	};
};

export const sendingDoctorData = () => {
	return {
		type: 'SENDING_DOCTOR_DATA',
	};
};

export const doctorSuccess = (data) => {
	return {
		type: 'DOCTOR_SUCCESS',
		payload: data,
	};
};

export const doctorFailure = (message) => {
	return {
		type: 'DOCTOR_FAILURE',
        payload : message
	};
};
