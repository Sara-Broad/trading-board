import React from 'react'
import { createStore, combinedReducers } from 'redux'
// import reducers from '../reducers/reducer file

const store = createStore(
    combinedReducers({
        state: reducers
    })
    // can install browser extensions
)

export {
    store
}