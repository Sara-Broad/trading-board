import React, { Component } from 'react';
// import NewAccountCard from '../components/NewAccountCard/NewAccountCard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

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


// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

// function posts(
//   state = {
//     isFetching: false,
//     didInvalidate: false,
//     items: []
//   },
//   action
// ) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return Object.assign({}, state, {
//         didInvalidate: true
//       })
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false
//       })
//     case RECEIVE_POSTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       })
//     default:
//       return state
//   }
// }

// function postsBySubreddit(state = {}, action) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         [action.subreddit]: posts(state[action.subreddit], action)
//       })
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   postsBySubreddit,
//   selectedSubreddit
// })

// export default rootReducer
    
//         function fetchPosts(subreddit) {
//             return dispatch => {
//               dispatch(requestPosts(subreddit))
//               return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//                 .then(response => response.json())
//                 .then(json => dispatch(receivePosts(subreddit, json)))
//             }
//           }
          
//           function shouldFetchPosts(state, subreddit) {
//             const posts = state.postsBySubreddit[subreddit]
//             if (!posts) {
//               return true
//             } else if (posts.isFetching) {
//               return false
//             } else {
//               return posts.didInvalidate
//             }
//           }
          
//           export function fetchPostsIfNeeded(subreddit) {
//             return (dispatch, getState) => {
//               if (shouldFetchPosts(getState(), subreddit)) {
//                 return dispatch(fetchPosts(subreddit))
//               }
//             }
//           }



    componentDidMount() {
        const { users } = this.props
        if (users.length === 0) {
            this.props.loadUsers()
            // actions.user.loadUsers().catch(error => {
            //     alert("Loading users failes" + error)
            // })
        }
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
    // user: PropTypes.array.isRequired,
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

