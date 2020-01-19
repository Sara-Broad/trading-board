import { actionTypes } from '../actions/actionTypes'

const initialState = {
    posting: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.posting.ADD_POSTING
        case 'EXAMPLE':
            return {
                ...state,
                posting: action.value
        }
        default:
           return state
    }
}