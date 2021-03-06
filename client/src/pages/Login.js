import React, { Component } from 'react';
import LoginCard from '../components/LoginCard/LoginCard'

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    holding: {
        textAlign: 'center'
    }
}
class LogIn extends Component {
    render () {
        return (
            <div>
                <h3 style={( styles.header )}>Log-In</h3>
                <div>
                    <h6 style={( styles.holding )}>Not much to see here yet.</h6>
                </div>
                <LoginCard />
            </div>
        )
    }
}

export default LogIn;