import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_PASSWORD } from "./types";



export const firstName = (dispatch) => {
    dispatch({type: SET_FIRST_NAME})
};
export const lastName = (dispatch) => {
    dispatch({type: SET_LAST_NAME})
};
export const email = (dispatch) => {
    dispatch({type: SET_EMAIL})
};
export const password = (dispatch) => {
    dispatch({type: SET_PASSWORD})
}