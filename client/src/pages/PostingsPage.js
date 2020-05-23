import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import PostingList from '../components/PostingList/PostingList'
import { bindActionCreators } from 'redux';
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

class PostingsPage extends Component {
    state = {
      posting: {
        title: ""
      }
    };

    componentDidMount() {
        const { postings } = this.props
        if (postings.length === 0) {
            this.props.loadPostings().catch(error => {
                console.log('error with postings', error)
            })
            // actions.user.loadUsers().catch(error => {
            //     alert("Loading users failes" + error)
            // })
        }
    }
  
    // handleChange = event => {
    //   const posting = { ...this.state.posting, title: event.target.value };
    //   this.setState({ posting });
    // };
  
    // handleSubmit = event => {
    //   event.preventDefault();
    //   this.props.actions.createCourse(this.state.course);
    // };
  
    render() {
      return (
        <div>
            {this.props.postings.map(posting => (
            <div key={posting.title}>{posting.title}</div>
          ))}
        </div>
        // <form onSubmit={this.handleSubmit}>
        //   <h2>Courses</h2>
        //   <h3>Add Course</h3>
        //   <input
        //     type="text"
        //     onChange={this.handleChange}
        //     value={this.state.course.title}
        //   />
  
        //   <input type="submit" value="Save" />
        //   {this.props.postings.map(posting => (
        //     <div key={posting.title}>{course.title}</div>
        //   ))}
        // </form>
      );
    }
  }

// class PostingsPage extends Component {
//     state = {
//         posting: {
//             title: "",
//             // description: "",
//             // city: "",
//             // state: "",
//             // neighorhood: "",
//             // contactName: "",
//         }
//     }
//     componentDidMount() {
//         const { postings } = this.props
//         if (postings.length === 0) {
//             this.props.loadPostings()
//         }
//     }

//     render () {
//         return (
//             <div>
//                 <h3 style={( styles.header )}>Postings</h3>
//                 <div>
//                     <h6 style={( styles.holding )}>Nothing to see here yet.</h6>
//                     <PostingList postings={this.props.postings} />
//                 </div>
//             </div>
//         )
//     }
// }

PostingsPage.propTypes = {
    postings: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loadPostings: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { postings } = state
    return { postings }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...actions.posting }, dispatch),
        loadPostings: bindActionCreators(actions.posting.loadPostings, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostingsPage)
