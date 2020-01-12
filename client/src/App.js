import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import RegisterUser from './pages/Register'
import TeacherPage from './pages/Teacher';
// import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Trading-Board</h1> */}
        <Switch>
          <Route exact path='/' />
          <Route exact path='/account' component={RegisterUser} /> 
          <Route exact path='/teachers' component={TeacherPage} /> 

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