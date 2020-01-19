import React, { Component } from 'react';

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    holding: {
        textAlign: 'center'
    }
}

class MessagePage extends Component {
    render () {
        return (
            <div>
                <h3 style={( styles.header )}>Messages</h3>
                <div>
                    <h6 style={( styles.holding )}>Nothing to see here yet.</h6>
                </div>
            </div>
        )
    }
}

export default MessagePage;