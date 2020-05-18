import React, { Component } from 'react';
// import NewAccountCard from '../components/NewAccountCard/NewAccountCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'
import  UserList   from '../components/UserList/UserList'

// const styles = {
//     header: {
//         textAlign: 'center',
//         marginBottom: '40px'
//     },
//     holding: {
//         textAlign: 'center'
//     }
// }

class RegisterUser extends Component {
        state = {
            user: {
                name: "",
                // email: ''
            }
        }

    componentDidMount() {
        const { users } = this.props
        if (users.length === 0) {
            this.props.loadUsers()
            // actions.user.loadUsers().catch(error => {
            //     alert("Loading users failes" + error)
            // })
        }
    }
  
    // handleInputChange = event => {
    //     const user = { ...this.state.user, name: event.target.value }
    //     this.setState({user})
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault()
    //     this.props.actions.addUser(this.state.user)
    // }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <UserList users={this.props.users} />           
            </div>
        )
    }
}

       {/* <form onSubmit={this.handleFormSubmit} className="heading">
                  <input type="text" onChange={this.handleInputChange} value={this.state.user.name}></input>
                  <input type="submit" value="Save" />
                </form> */}
   {/* { this.props.users.map(user => (
                      <div key={user.name}>{user.name}</div>
                ))} */}
RegisterUser.propTypes = {
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loadUsers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { router, users } = state
    return { router, users }
//   return {
//       users: state.users
//   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...actions.user }, dispatch),
        loadUsers: bindActionCreators(actions.user.loadUsers, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)

