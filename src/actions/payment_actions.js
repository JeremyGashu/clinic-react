import axios from '../utils/Axios';

export const sendPaymentData = (clinicInfo) => {
	return (dispatch) => {
        let authToken = localStorage.getItem('AUTH_TOKEN')
		dispatch(sendingPaymentData());
		return axios({
            method:'POST',
            url : '/clinics/add-payment',
            headers : {
                'Authorization' : `Bearer ${authToken}`
            },
            data:clinicInfo
        }).then(({ data }) => {
				dispatch(paymentSuccess(data));
			})
			.catch((err) => {
				
				dispatch(paymentFailure('The username is already taken!'));
			});
	};
};

export const initialPaymentAction = () => {
	return {
		type: 'INITIAL_PAYMENT_ACTION',
	};
};

export const sendingPaymentData = () => {
	return {
		type: 'SENDING_PAYMENT_DATA',
	};
};

export const paymentSuccess = (data) => {
	return {
		type: 'PAYMENT_SUCCESS',
		payload: data,
	};
};

export const paymentFailure = (message) => {
	return {
		type: 'PAYMENT_FAILURE',
        payload : message
	};
};
