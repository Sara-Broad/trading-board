import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import messages from './message'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    messages
    // rest of reducers
})

export default createRootReducer