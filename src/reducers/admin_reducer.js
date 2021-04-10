const INITIAL_STATE = {
	sendingAdminDataRequest: false,
	fetchReady : false,
	adminData: {},
};

export const adminReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_ADMIN_DATA_STATE':
			return {
				...state,
				sendingAdminDataRequest: false,
				adminData: {},
				fetchReady : false,
			};
		case 'SENDING_ADMIN_DATA_REQUEST':
			return {
				...state,
				sendingAdminDataRequest: true,
				fetchReady : false
			};
		case 'ADMIN_DATA_LOADED':
			return {
				...state,
				adminData: action.payload,
				sendingAdminDataRequest: false,
				fetchReady : true,
			};
		case 'ADMIN_DATA_FAILURE':
			return {
				...state,
				sendingAdminDataRequest: false,
				fetchReady : false,
			};

		default:
			return state;
	}
};
