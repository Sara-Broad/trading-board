import { actionTypes } from '../actions/actionTypes'

const initialState = {
    loading: false,
    posting: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POSTING.GET_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.POSTING.ADD_POSTINGS: {
            return { ...state, posting: action.value }
        }
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