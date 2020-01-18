import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import RegisterUser from './pages/Register'
import TradeBoard from './pages/TradeBoard';
import HomePage from './pages/Home';
import LogIn from './pages/Login';
import Header from './components/Header/Header'
// import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Trading-Board</h1> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/trade' component={TradeBoard} /> 
          <Route exact path='/login' component={LogIn} /> 
          <Route exact path='/newaccount' component={RegisterUser} /> 
        </Switch>
      </div>
    )
  }
}

export default App;

// const mapStateToProps = (state) => {
//   return {

//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({exampleImportedAction}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)