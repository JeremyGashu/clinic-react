const INITIAL_STATE = {
	sendingAdminDataRequest: false,
	adminData: {},
};

export const adminReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_ADMIN_DATA_STATE':
			return {
				...state,
				sendingAdminDataRequest: false,
				adminData: {},
			};
		case 'SENDING_ADMIN_DATA_REQUEST':
			return {
				...state,
				sendingAdminDataRequest: true,
			};
		case 'ADMIN_DATA_LOADED':
			return {
				...state,
				adminData: action.payload,
			};
		case 'ADMIN_DATA_FAILURE':
			return {
				...state,
				sendingAdminDataRequest: false,
			};

		default:
			return state;
	}
};
