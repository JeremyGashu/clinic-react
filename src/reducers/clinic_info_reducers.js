const INITIAL_STATE = {
	sendingClinicInfo: false,
	fetchReady: false,
	clinicInfo: {},
};

export const clinicReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_CLINIC_INFO':
			return {
				...state,
				sendingClinicInfo: false,
				fetchReady: false,
				clinicInfo: {},
			};
		case 'SENDING_CLINIC_INFO_REQUEST':
			return {
				...state,
				sendingClinicInfo: true,
				fetchReady: false,
			};
		case 'CLINIC_INFO_SUCCESS':
			return {
				...state,
				clinicInfo: action.payload,
				sendingClinicInfo: false,
				fetchReady: true,
			};
		case 'CLINIC_INFO_FAILURE':
			return {
				...state,
				sendingClinicInfo: false,
				fetchReady: false,
			};

		default:
			return state;
	}
};
