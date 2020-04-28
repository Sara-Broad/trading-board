import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
// import actionTypes from '.././actions'

import messages from './message'
import postings from './posting'
import users from './user'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    messages,
    postings,
    users
    // rest of reducers
})

export default createRootReducer

// reducers accept a current state and an action and return a new state