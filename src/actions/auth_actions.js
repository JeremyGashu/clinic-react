import axios from '../utils/Axios'

export const sendAuthData = (username, password) => {
    return dispatch => {
        dispatch(sendingAuthData())
      return axios.post('/auth/login', {username, password})
        .then(({ data }) => {
            dispatch(authSuccess(data))
      }).catch(err => dispatch(authFailure()))
    };
}

export const initialAuthState = () => {
    return {
        type : 'INITIAL_AUTH_STATE'
    }
}

export const sendingAuthData = () => {
    return {
        type : 'SENDIND_AUTH_DATA'
    }
}

export const authSuccess = (data) => {
    return {
        type : 'AUTH_SUCCESS',
        payload : data
    }
}

export const authFailure = () => {
    return {
        type : 'AUTH_FAILED'
    }
}