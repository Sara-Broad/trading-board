import React from 'react'
import './TradingCard.css'
import Card from 'react-bootstrap/Card'


class TradingCard extends React.Component {
    render() {
        return (
            <div>
              <Card className="card">
                 <Card.Title className="heading">Get Stuff</Card.Title>
                 <Card.Body>Listings Here</Card.Body>
              </Card>
            </div>
        )
    }
}

export default TradingCard;