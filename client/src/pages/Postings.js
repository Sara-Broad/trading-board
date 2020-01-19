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

class Postings extends Component {
    render () {
        return (
            <div>
                <h3 style={( styles.header )}>Postings</h3>
                <div>
                    <h6 style={( styles.holding )}>Nothing to see here yet.</h6>
                </div>
            </div>
        )
    }
}

export default Postings;