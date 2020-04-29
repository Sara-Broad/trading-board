import React from 'react'
import './LoginCard.css'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

class LoginCard extends React.Component {
    render() {
        return (
            <div>
              <Card className="cardBody">
                 <Card.Title className="heading">User Log-In</Card.Title>
                 <Card.Body>
                     <Form>
                         <Form.Group controlId="formBasicEmail">
                             <Form.Label>Email address</Form.Label>
                             <Form.Control type="email" placeholder="Enter email" />
                         </Form.Group>
                         <Form.Group controlId="formBasicPassword">
                             <Form.Label>Password</Form.Label>
                             <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         <Button variant="primary" type="submit">
                             Submit
                         </Button>
                     </Form>
                     <Nav className="justify-content-center">
                         <Nav.Item>
                             <Nav.Link href='/newaccount'>Register Here</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                             <Nav.Link>Forgot Password?</Nav.Link>
                         </Nav.Item>
                     </Nav>
                 </Card.Body>
              </Card>
            </div>
        )
    }
}

export default LoginCard;