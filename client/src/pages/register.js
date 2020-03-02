import React, { Component } from 'react';
import NewAccountCard from '../components/NewAccountCard/NewAccountCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
        users: [],
        name: "",
        email: "",
        password: "",
        // renterPassword: ""
    }

      handleInputChage = event => {
          const { name, value } = event.target;
          this.setState({
              [name]: value
          })
      }

      handleFormSubmit = event => {
          event.preventDefault()
      }
   
    render () {
        return (
            <div>
                <h3 style={( styles.header )}>New User Page</h3>
                <div>
                    <h6 style={( styles.holding )}>Not much to see here yet.</h6>
                </div>
                <div>
                    <NewAccountCard 
                    handleInputChage={this.handleInputChage}
                    handleFormSubmit={this.handleFormSubmit}
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    // renterPassword={this.state.renterPassword}
                    />
                </div>
            </div>
        )
    }
}

// export default RegisterUser;

const mapStateToProps = (state) => ({
    // const { user } = state
    // return ( user )
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { ...actions.user },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)


// const mapStateToProps = state => {
//     return {
//       availableIcecreams: state.icecream.availableIcecreams
//     };
//   };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       sellIcecream: () => {
//         dispatch(sellIcecream());
//       }
//     };
//   };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);