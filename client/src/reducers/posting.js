import { actionTypes } from '../actions/actionTypes'

const initialState = {
    postings: [],
    isLoading: false
}

export default (state = initialState.postings, action) => {
    switch (action.type) {
        case actionTypes.POSTING.LOAD_POSTINGS_SUCCESS: 
            // return action.value
            return action.postings
        case actionTypes.POSTING.GET_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.POSTING.ADD_POSTINGS: {
            return [...state, { ...action.posting }]
        }
        // case actionTypes.POSTING.ADD_POSTINGS: {
        //     return { ...state, posting: action.value }
        // }
        case actionTypes.POSTING.DELETE_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.POSTING.EDIT_POSTINGS: {
            return { ...state, posting: action.value }
        }
        default:
           return state
    }
}


// import { actionTypes } from "../actions/actionTypes";
// // import * as actionTypes from "../actions/actionTypes";

// const initialState = {
//     users: [],
//     isLoading: false
// }

// export default (state = initialState.users, action) => {
//     switch (action.type) {
//         case actionTypes.USER.ADD_USER:
//           return [...state, { ...action.user }]
//         case actionTypes.USER.LOAD_USERS_SUCCESS:
//           return action.users
//         case actionTypes.USER.LOAD_USERS:
//             return action.users
//         default:
//           return state;
//     }
// }