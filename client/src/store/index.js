// actions are dispatched here
// use mapStateToProps on components - any change to store will flow down to component
// component uses mapDispatchToProps - `Dispatch` is a store method that takes an action (imported) and sends it tot he reducer
// then the reducer receives that action and changes the app state
import {
    createBrowserHistory
} from 'history';
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
    routerMiddleware
} from 'connected-react-router'
import createRootReducer from '../reducers/reducer';

export const history = createBrowserHistory()

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export default function configureStore() {
    const store = createStore(
        createRootReducer(history),
        // can preload state
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk
                // ... other middlewares ...

            ),
        ),
    )
    return store
}