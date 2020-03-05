import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import RegisterUser from './pages/Register'
import TradeBoard from './pages/TradeBoard';
import HomePage from './pages/Home';
import LogIn from './pages/Login';
import Postings from './pages/Postings'
import MessagePage from './pages/Messages'
import NavHeading from './components/NavHeading/NavHeading'
// import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Trading-Board</h1> */}
        <NavHeading />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/trade' component={TradeBoard} /> 
          <Route exact path='/login' component={LogIn} /> 
          <Route exact path='/newaccount' component={RegisterUser} /> 
          <Route exact path='/postings' component={Postings} /> 
          <Route exact path='/messages' component={MessagePage} /> 
        </Switch>
      </div>
    )
  }
}

// export default App;

const mapStateToProps = (state) => {
  const { router } = state
  return { router }
}

export default connect(mapStateToProps)(App)

App.propTypes = {
  router: PropTypes.object.isRequired
}