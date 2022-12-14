import axios from "axios"
import { images } from "../constants"


export const registerUser = (user) => async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
        const response = await axios.post('http://localhost:8000/api/users/register', user )
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
        const response = await axios.post('http://localhost:8000/api/users/login', user)
        console.log(response)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href='/'
        
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUser = (user) => async dispatch => {
    localStorage.removeItem('currentUser')
        window.location.href='/'

}

export const getAllUsers = () => async dispatch => {
    dispatch({type: 'GET_USERS_REQUEST'})

    try {
        const response = await axios.get('http://localhost:8000/api/users/allusers')
        console.log(response)
        dispatch({type: 'GET_USERS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type: 'GET_USERS_FAILED', payload: error})
    }
}