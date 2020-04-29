import { actionTypes } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.USER.ADD_USER:
          return [...state, { ...action.user }]
        case actionTypes.USER.LOAD_USERS_SUCCESS:
          return action.users
        // case actionTypes.USER.GET_USERS:
        //     return action.users
        default:
          return state;
    }
}