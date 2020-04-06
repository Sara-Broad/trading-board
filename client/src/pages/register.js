import React, { Component } from 'react';
import NewAccountCard from '../components/NewAccountCard/NewAccountCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as actions from '.././actions'
import { user } from '.././actions/index'
// import { addUser } 

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

     componentDidMount() {
         // this.props
         // this.props.user.addUser
         user.addUser
     }

      handleInputChage = event => {
          const { name, value } = event.target;
          this.setState({
              [name]: value
          })
      }

      handleFormSubmit = event => {
          // need to call addUser here
          event.preventDefault()
      }
   
    render () {
        const email = 'email@test.com'
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
                    // email={this.state.email}
                    email={email}
                    password={this.state.password}
                    // renterPassword={this.state.renterPassword}
                    />
                </div>
            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)
export default RegisterUser;

// const mapStateToProps = (state) => ({
//     // const { user } = state
//     // return ( user )
//     user: state.user
// })

// used to dispatch the action that receives the dispatch as method and returns the callback function.
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         { ...actions.user },
//         dispatch
//     )
// }

const mapStateToProps = state => {
    return {
        blogs: state.blogs.all,
        paginate: state.blogs.paginate,
        totalCount: state.blogs.totalCount
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBlogs: (paginate, category, sortingby) => {
        dispatch(fetchBlogs(paginate, category, sortingby));
    },
    fetchBlogDetails: (id, paginate) => {
        dispatch(fetchBlogDetails(id, paginate));
    },
    changePaginate: (paginate) => {
        dispatch(changePaginate(paginate));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);


// export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)


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