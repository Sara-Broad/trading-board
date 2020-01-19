import { actionTypes } from './actionTypes';

const posting = {
    addPosting: (value) => {
        return { type: actionTypes.POSTING.ADD_POSTING, value }
    },

    deletePosting: (value) => {
        return { type: actionTypes.POSTING.DELETE_POSTING, value } 
    }
}

export { posting }