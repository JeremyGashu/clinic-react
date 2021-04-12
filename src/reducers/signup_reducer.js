const INITIAL_STATE = {
	sendingSignUpData: false,
	signUpData: {},
};

export const signUpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_SIGNUP_DATA':
			return {
				...state,
				sendingAuthData: false,
				signUpData: {},
                signUpError : false,
			};
		case 'SENDING_SIGNUP_DATA':
			return {
				...state,
				sendingSignUpData: true,
			};
		case 'SIGNUP_SUCCESS':
			return {
				...state,
				sendingSignUpData : false,
                signUpData : action.payload,
                signUpError : false,
                signUpSuccess : true,
			};
		case 'SIGNUP_FAILURE':
			return {
				...state,
				sendingSignUpData : false,
                signUpData : {},
                signUpError : true,
                errorMessage : action.payload,
			};
		default:
			return state;
	}
};
