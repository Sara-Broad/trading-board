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

class RegisterUser extends Component {
    render () {
        return (
            <div>
                <h3 style={( styles.header )}>New User Page</h3>
                <div>
                    <h6 style={( styles.holding )}>Not much to see here yet.</h6>
                </div>
            </div>
        )
    }
}

export default RegisterUser;