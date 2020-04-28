import React, { Component } from 'react';
import NewAccountCard from '../components/NewAccountCard/NewAccountCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Card from 'react-bootstrap/Card'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import * as actions from '.././actions'

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    holding: {
        textAlign: 'center'
    }
}

class RegisterUser extends Component {
        state = {
            user: {
                name: "",
                // email: ''
            }
        }
    
    componentDidMount() {
        // this.props
        // this.props.user.addUser
        //  user.addUser
    }

    handleInputChange = event => {
        const user = { ...this.state.user, name: event.target.value }
        this.setState({user})
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.actions.addUser(this.state.user)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="heading">
                  <input type="text" onChange={this.handleInputChange} value={this.state.user.name}></input>
                  <input type="submit" value="Save" />
                  { this.props.users.map(user => (
                      <div key={user.name}>{user.name}</div>
                  ))}
                </form>
            </div>
        )
    }
}

RegisterUser.propTypes = {
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
      users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addUser: user => dispatch(actions.user.addUser(user))
        actions: bindActionCreators(actions.user, dispatch)
    }
}

// const mapDispatchToProps = {
//     addUser: actions.addUser
// }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)

