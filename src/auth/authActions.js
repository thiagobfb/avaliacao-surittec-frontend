import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

// const userKey = '_avaliacao_user'

// export const isAuthenticated = () => localStorage.getItem(userKey) !== null;

// export const getToken = () => localStorage.getItem(TOKEN_KEY);

export function login(values) {
    return submit(values, `${consts.API_URL}/login`)
}

function submit(values, url) {
    console.log('Passei por aqui');
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                console.log(JSON.stringify(resp))
                // localStorage.setItem(TOKEN_KEY, resp.headers.authorization);
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.headers.authorization }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    localStorage.removeItem(userKey)
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.API_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}