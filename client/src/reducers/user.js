import { actionTypes } from "../actions/actionTypes";
// import * as actionTypes from "../actions/actionTypes";

const initialState = {
    users: [],
    isLoading: false
}

export default (state = initialState.users, action) => {
    switch (action.type) {
        case actionTypes.USER.ADD_USER:
          return [...state, { ...action.user }]
        case actionTypes.USER.LOAD_USERS_SUCCESS:
          return action.users
        case actionTypes.USER.LOAD_USERS:
            return action.users
        default:
          return state;
    }
}