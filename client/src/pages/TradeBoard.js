import React, { Component } from 'react';
import TradingCard from '../components/TradingCard/TradingCard'

const styles = {
    textAlign: 'center',
    marginBottom: '40px'
}

class TradeBoard extends Component {
    render () {
        return (
            <div>
                <h3 style={( styles )}>Buy Nothing Page</h3>
                <div>
                <TradingCard />
                </div>
            </div>
        )
    }
}

export default TradeBoard;