import { actionTypes } from './actionTypes';
import * as postingApi from "../api/postingApi"
import { dispatch } from 'rxjs/internal/observable/range';
// import axios from 'axios';

// const ROOT_URL = 'http://localhost:3000/posting'
// action trigger change
const posting = {
    loadPostingSuccess: (postings) => {
      return { type: actionTypes.POSTING.LOAD_POSTINGS_SUCCESS, postings }
    },
    loadPostings: () => {
        return (dispatch) => {
            return postingApi
                .getPostings()
                .then(postings => {
                    dispatch(posting.loadPostingSuccess(postings))
                })
                .catch(error => {
                    throw error;
                })
        }
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