import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import * as actions from '../.././actions'
import { addUser } from '../.././actions'
import { dispatch } from 'rxjs/internal/observable/pairs';

// class TradingCard extends Component {
//     // handleInputChage = event => {
//     //     const { name, value } = event.target;
//     //     this.setState({
//     //         [name]: value
//     //     })
//     // }

//     render () {
//         const { user } = this.props
//         return (
//             <div>
            // <Card className="cardBody">
//                <Card.Title className="heading">Get Stuff</Card.Title>
//                   <Card.Body>
//                        <Form>
//                        <Form.Group controlId="formName">
//                               <Form.Label>Name</Form.Label>
//                               <Form.Control placeholder="Full Name" 
//                             //   value={props.name}
//                                 // onChange={this.handleInputChange}
//                               />
//                           </Form.Group>
//                           <Form.Group controlId="formBasicEmail">
//                               <Form.Label>Email address</Form.Label>
//                               <Form.Control type="email" placeholder="Enter email" />
//                           </Form.Group>
//                           <Form.Group controlId="formBasicPassword">
//                               <Form.Label>Password</Form.Label>
//                               <Form.Control type="password" placeholder="Password" />
//                           </Form.Group>
//                           {/* <Form.Group controlId="formBasicPassword">
//                               <Form.Label>Re-enter Password</Form.Label>
//                               <Form.Control type="password" placeholder="Re-enter Password" />
//                           </Form.Group> */}
//                                <Button variant="primary" type="submit">
//                                    Submit
//                                </Button>
//                           </Form>
//                   </Card.Body>             
//               </Card>
//           </div>
//         )
//     }
// }

const TradingCard = props => (
    
    
    <div>
    <Card className="cardBody">
       <Card.Title className="heading">Get Stuff</Card.Title>
          <Card.Body>
               <Form>
               <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={props.email}
                        onChange={props.handleInputChange}
                        />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicPassword2">
                      <Form.Label>Re-enter Password</Form.Label>
                      <Form.Control type="password" placeholder="Re-enter Password" />
                  </Form.Group> */}
                       <Button variant="primary" type="submit" onSubmit={props.handleFormSubmit}>
                           Submit
                       </Button>
                  </Form>
          </Card.Body>             
      </Card>
  </div>    
)

// const mapStateToProps = state => {
//     return {
//         users: state.users.users
//     }
// }

// const mapDispatchToProps = dispatchEvent => {
//     return {
//         addUser: () => {
//             dispatch(addUser())
//         }
//     }
// }

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { ...actions.user },
        dispatch
    )
}

TradingCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TradingCard)
    
