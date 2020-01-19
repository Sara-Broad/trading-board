import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import messages from './message'
import postings from './posting'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    messages,
    postings
    // rest of reducers
})

export default createRootReducer