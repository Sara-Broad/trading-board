// actions are dispatched here
// use mapStateToProps on components - any change to store will flow down to component
// component uses mapDispatchToProps - `Disbatch` is a store method that takes an action (imported) and sends it tot he reducer
// then the reducer receives that action and changes the app state
import { createStore, combineReducers } from 'redux'
import reducers from '../reducers/reducer.js'

export const store = createStore(
    combineReducers({
        state: reducers
    })
)
