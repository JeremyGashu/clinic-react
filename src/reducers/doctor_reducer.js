const INITIAL_STATE = {
	sendingDoctorData: false,
	doctorData: {},
};

export const doctorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_DOCTOR_STATE':
			return {
				...state,
				ssendingDoctorData: false,
                doctorData: {},
			};
		case 'SENDING_DOCTOR_DATA':
			return {
				...state,
				sendingDoctorData: true,
			};
		case 'DOCTOR_SUCCESS':
			return {
				...state,
				sendingDoctorData: false,
				doctorData: action.payload,
				doctorError: false,
				doctorSuccess: true,
			};
		case 'DOCTOR_FAILURE':
			return {
				...state,
				sendingDoctorData: false,
				doctorData: {},
				doctorError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
