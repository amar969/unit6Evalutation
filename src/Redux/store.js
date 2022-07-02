import {legacy_createStore as createStore} from "redux"; 
import {reducer} from "./reducer.js"

const initialState = {
   user: null, 
}

let user = localStorage.getItem(JSON.stringify("user"))
console.log("user", user); 

export const store = createStore(reducer, initialState)

console.log(store,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())