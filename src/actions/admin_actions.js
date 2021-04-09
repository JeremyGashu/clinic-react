import axios from "../utils/Axios";

export const getAdminDataRequest = () => {
    let authToken = localStorage.getItem('AUTH_TOKEN')
    console.log(authToken)
    return dispatch => {
        dispatch(sendingAdminDataRequest())
      return axios({
          method : 'GET',
          url : '/admin/info',
          headers : {
              'Authorization' : `Bearer ${authToken}`
          }
      })
        .then(({ data }) => {
            dispatch(adminDataSuccess(data))
      }).catch(err => dispatch(adminDataFailure()))
    };
}

export const initialAdminDataState = () => {
    return {
        type : 'INITIAL_ADMIN_DATA_STATE'
    }
}

export const sendingAdminDataRequest = () => {
    return {
        type : 'SENDING_ADMIN_DATA_REQUEST'
    }
}

export const adminDataSuccess = (data) => {
    return {
        type : 'ADMIN_DATA_LOADED',
        payload : data
    }
}

export const adminDataFailure = () => {
    return {
        type : 'ADMIN_DATA_FAILURE'
    }
}