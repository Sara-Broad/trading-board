import { actionTypes } from './actionTypes';
import * as postingApi from "../api/postingApi"
// import axios from 'axios';

// const ROOT_URL = 'http://localhost:3000/posting'
// action trigger change
const posting = {
    loadPostingsSuccess: (postings) => {
        return { type: actionTypes.POSTING.LOAD_POSTINGS_SUCCESS, postings }
    },
    loadPostings: () => {
        return (dispatch) => {
            return postingApi
                .getPostings()
                .then(postings => {
                    dispatch(posting.loadPostingsSuccess(postings))
                })
                .catch(error => {
                    throw error;
                })
        }
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