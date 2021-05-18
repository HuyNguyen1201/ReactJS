import * as actionTypes from './actionTypes'
import axios from './../../axios-orders'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnfgfNrr1kcN4JjMmZRUocEfAwrICjmqc'
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnfgfNrr1kcN4JjMmZRUocEfAwrICjmqc'
        }
        axios.post(url, authData)
            .then(resp => {
                console.log(resp)
                const expirationDate = new Date(new Date().getTime() + resp.data.expiresIn * 1000)
                localStorage.setItem('token', resp.data.idToken);
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', resp.data.localId)
                dispatch(authSuccess(resp.data))
                dispatch(checkAuthTimeout(resp.data.expiresIn))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error))
            })
    }
}
export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate > new Date()) {
                dispatch(authSuccess({ idToken: token, localId: userId}))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
            else {
                dispatch(logout());
            }
        }
    }
}