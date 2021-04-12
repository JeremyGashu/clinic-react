import axios from '../utils/Axios';

export const sendSignUpData = (clinicInfo) => {
	return (dispatch) => {
		dispatch(sendingSignUpData());
		return axios
			.post('/clinics/signup', clinicInfo)
			.then(({ data }) => {
				dispatch(signupSuccess(data));
			})
			.catch((err) => {
				
				dispatch(signUpFailure('The username is already taken!'));
			});
	};
};

export const initialSignupData = () => {
	return {
		type: 'INITIAL_SIGNUP_DATA',
	};
};

export const sendingSignUpData = () => {
	return {
		type: 'SENDING_SIGNUP_DATA',
	};
};

export const signupSuccess = (data) => {
	return {
		type: 'SIGNUP_SUCCESS',
		payload: data,
	};
};

export const signUpFailure = (message) => {
	return {
		type: 'SIGNUP_FAILURE',
        payload : message
	};
};
