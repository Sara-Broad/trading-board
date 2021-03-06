import { actionTypes } from '../actions/actionTypes'

// const initialState = {
//     loading: false,
//     posting: []
// }

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.POSTING.LOAD_POSTINGS_SUCCESS: 
            // return action.value
            return action.posting
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