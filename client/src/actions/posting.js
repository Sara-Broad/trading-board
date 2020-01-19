import { actionTypes } from './actionTypes';

const posting = {
    getPostings: (value) => {
        return { type: actionTypes.POSTING.GET_POSTINGS, value }
    },
    addPostings: (value) => {
        return { type: actionTypes.POSTING.ADD_POSTINGS, value }
    },
    deletePostinsg: (value) => {
        return { type: actionTypes.POSTING.DELETE_POSTINGS, value } 
    },
    editPostings: (value) => {
        return { type: actionTypes.POSTING.EDIT_POSTINGS, value }
    }
}

export { posting }