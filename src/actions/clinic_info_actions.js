import axios from "../utils/Axios";

export const getClinicInfoRequest = () => {
    let authToken = localStorage.getItem('AUTH_TOKEN')
    return dispatch => {
        dispatch(sendingClinicInfoRequest())
      return axios({
          method : 'GET',
          url : '/clinics/info',
          headers : {
              'Authorization' : `Bearer ${authToken}`
          }
      })
        .then(({ data }) => {
            dispatch(clinicInfoSuccess(data))
      }).catch(err => dispatch(clinicInfoFailure()))
    };
}

export const initialClinicInfo = () => {
    return {
        type : 'INITIAL_CLINIC_INFO'
    }
}

export const sendingClinicInfoRequest = () => {
    return {
        type : 'SENDING_CLINIC_INFO_REQUEST'
    }
}

export const clinicInfoSuccess = (data) => {
    return {
        type : 'CLINIC_INFO_SUCCESS',
        payload : data
    }
}

export const clinicInfoFailure = () => {
    return {
        type : 'CLINIC_INFO_FAILURE'
    }
}