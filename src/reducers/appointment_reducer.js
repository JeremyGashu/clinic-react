const INITIAL_STATE = {
	sendingAppointmentData: false,
	appointmentData: {},
};

export const appointmentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_APPOINTMENT_STATE':
			return {
				...state,
				sendingAppointmentData: false,
				appointmentData: {},
			};
		case 'SENDING_APPOINTMENT_DATA':
			return {
				...state,
				sendingAppointmentData: true,
			};
		case 'APPOINTMENT_SUCCESS':
			return {
				...state,
				sendingAppointmentData: false,
				appointmentData: action.payload,
				appointmentError: false,
				appointmentSuccess: true,
			};
		case 'APPOINTMENT_FAILURE':
			return {
				...state,
				sendingAppointmentData: false,
				appointmentData: {},
				appointmentError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
