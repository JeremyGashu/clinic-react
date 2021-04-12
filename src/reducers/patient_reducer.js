const INITIAL_STATE = {
	sendingPatientData: false,
	patientData: {},
};

export const patientReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_PATIENT_ACTION':
			return {
				...state,
				sendingPatientData: false,
				patientData: {},
			};
		case 'SENDING_PATIENT_DATA':
			return {
				...state,
				sendingPatientData: true,
			};
		case 'PATIENT_SUCCESS':
			return {
				...state,
				sendingPatientData: false,
				patientData: action.payload,
				patientError: false,
				patientSuccess: true,
			};
		case 'PATIENT_FAILURE':
			return {
				...state,
				sendingPatientData: false,
				patientData: {},
				patientError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
