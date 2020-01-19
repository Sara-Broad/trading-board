import React from 'react'
import './LoginCard.css'
import Card from 'react-bootstrap/Card'


class LoginCard extends React.Component {
    render() {
        return (
            <div>
              <Card className="cardBody">
                 <Card.Title className="heading">User Log-In</Card.Title>
                 <Card.Body>Enter Info Here</Card.Body>
              </Card>
            </div>
        )
    }
}

export default LoginCard;