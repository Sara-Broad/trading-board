import { actionTypes } from '../actions/actionTypes'

const initialState = {
    loading: false,
    posting: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.ADD_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.DELETE_POSTINGS: {
            return { ...state, posting: action.value }
        }
        case actionTypes.EDIT_POSTINGS: {
            return { ...state, posting: action.value }
        }
        default:
           return state
    }
}