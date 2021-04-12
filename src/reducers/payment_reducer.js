const INITIAL_STATE = {
	sendingPaymentData: false,
	paymentData: {},
};

export const paymentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_PAYMENT_ACTION':
			return {
				...state,
				sendingPaymentData: false,
				paymentData: {},
			};
		case 'SENDING_PAYMENT_DATA':
			return {
				...state,
				sendingPaymentData: true,
			};
		case 'PAYMENT_SUCCESS':
			return {
				...state,
				sendingPaymentData: false,
				paymentData: action.payload,
				paymentError: false,
				paymentSuccess: true,
			};
		case 'PAYMENT_FAILURE':
			return {
				...state,
				sendingPaymentData: false,
				paymentData: {},
				paymentError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
