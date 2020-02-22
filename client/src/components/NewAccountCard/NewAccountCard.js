import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>
                         <Button variant="primary" type="submit">
                             Submit
                         </Button>
                    </Form>
            </Card.Body>             
        </Card>
    </div>
)

export default TradingCard;
