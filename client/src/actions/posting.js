import { actionTypes } from './actionTypes';
// import axios from 'axios';

// const ROOT_URL = 'http://localhost:3000/posting'
// action trigger change
const posting = {
    loadPostingSuccess: (value) => {
      return { type: actionTypes.POSTING.LOAD_POSTINGS_SUCCESS, value }
    },
    getPostings: (value) => {
        // axios.get
        // request = axios.get(url)
        return { type: actionTypes.POSTING.GET_POSTINGS, value } // payload:request
    },
    addPostings: (value) => {
        // axios.post
        return { type: actionTypes.POSTING.ADD_POSTINGS, value } // payload:request
    },
    deletePostinsg: (value) => {
        // axios.delete - get by id 
        return { type: actionTypes.POSTING.DELETE_POSTINGS, value }  // payload:request
    },
    editPostings: (value) => {
        // axios.put - get by id
        return { type: actionTypes.POSTING.EDIT_POSTINGS, value } // payload:request
    }
}

export { posting }