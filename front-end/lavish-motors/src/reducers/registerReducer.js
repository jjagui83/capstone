import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL } from "../actions/types";







const initialState = {
    firstName: "",
    lastName: "",
    email: "",

};


const  registerUser = (state=initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return {...state, firstName: ""};

        case SET_LAST_NAME:
            return {...state, lastName: ""};

        case SET_EMAIL:
            return {...state, email: ""};
            
        default:
            return state;
    }


}
export default registerUser