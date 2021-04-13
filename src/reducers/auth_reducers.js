const INITIAL_STATE = {
    authenticated : false,
    sendingAuthData : false,
    authData : {}
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INITIAL_AUTH_STATE':
            return {
                ...state,
                authenticated : false,
                authData : {},
                sendingAuthData : false,
                authError : false,
                }
        case 'SENDIND_AUTH_DATA':
            return {
                ...state,
                sendingAuthData : true
            }
        case 'AUTH_SUCCESS':
            localStorage.setItem('AUTH_TOKEN', action.payload.token)
            return {
                ...state,
                authenticated : true,
                sendingAuthData : false,
                authData : action.payload,
                authError : false,
            }
        case 'AUTH_FAILED':
            return {
                ...state,
                authenticated : false,
                sendingAuthData : false,
                authError : true,
            }
        case 'LOGOUT':
            localStorage.removeItem('AUTH_TOKEN')
            return {
                ...state,
                authenticated : false,
                sendingAuthData : false,
                authData : {},
                authError:false
            }
        default:
            return state
    }
}