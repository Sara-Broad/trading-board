// import actions
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import reducers from './message'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    reducers
    // rest of reducers
})

export default createRootReducer