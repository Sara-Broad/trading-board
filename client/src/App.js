import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react'
import React from "react"
import { Route, Switch } from 'react-router'
import RegisterUser from './pages/Register'
import TradeBoard from './pages/TradeBoard';
import HomePage from './pages/Home';
import LogIn from './pages/Login';
import PostingsPage from './pages/PostingsPage'
import MessagePage from './pages/Messages'
import NavHeading from './components/NavHeading/NavHeading'
import PageNotFound from './components/PageNotFound/PageNotFound'

// class App extends Component {
//   render() {
  function App() {
    return (
      <div>
        <NavHeading />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/trade' component={TradeBoard} /> 
          <Route exact path='/login' component={LogIn} /> 
          <Route exact path='/newaccount' component={RegisterUser} /> 
          <Route exact path='/postings' component={PostingsPage} /> 
          <Route exact path='/messages' component={MessagePage} /> 
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }


export default App;
