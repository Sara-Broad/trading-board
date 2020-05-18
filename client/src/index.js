// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // change App to .jsx?
// // import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
// import configureStore, { history } from './store/index'
// import { ConnectedRouter } from 'connected-react-router';
// // store --> components --> actions --> reducers --> store

// const store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App/>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )


import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./components/App";
import "./index.css";
import configureStore, { history } from './store/index'
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);