import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_PASSWORD } from "../actions/types";







const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",

};


const  registerUser = (state=initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return {...state, firstName: ""};

        case SET_LAST_NAME:
            return {...state, lastName: ""};

        case SET_EMAIL:
            return {...state, email: ""};

        case SET_PASSWORD:
            return {...state, password: ""}
            
        default:
            return state;
    }


}
export default registerUser