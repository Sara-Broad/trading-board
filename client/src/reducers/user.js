import { actionTypes } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.USER.ADD_USER:
        return [...state, { ...action.user }]
            default:
                return state;
    }
}