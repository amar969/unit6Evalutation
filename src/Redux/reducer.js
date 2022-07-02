import { LOGIN, LOGOUT }  from "./actionType.js";

export const reducer = (store, action) => {

    switch(action.type) {
        case LOGIN: {
            return { ...store, user: store.user = action.payload } 
        }

        case LOGOUT: {
            return{ ...store, user: store.user = null  }
        }

        default: {
            return store;
        }
    }
}