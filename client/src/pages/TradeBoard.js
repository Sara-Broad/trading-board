import React, { Component } from 'react';
import TradingCard from '../components/TradingCard/TradingCard'

const styles = {
    textAlign: 'center'
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