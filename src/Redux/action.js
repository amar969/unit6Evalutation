import { LOGIN, LOGOUT } from "./actionType.js";


export const Login = (data) => ({
    type: LOGIN, 
    payload: data
})


export const Logout = (data) => ({
    type: LOGOUT, 
})