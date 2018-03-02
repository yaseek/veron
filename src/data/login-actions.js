import axios from 'axios'

const LOGIN_URL = '/api/v1/user/login'

export const doLogin = (values) => (dispatch) => {
    return axios.post(LOGIN_URL, values)
}