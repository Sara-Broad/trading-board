import React, { Component } from 'react';
import * as actions from '../actions'

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
    state = {
        posting: {
            title: "",
            description: "",
            city: "",
            state: "",
            neighorhood: "",
            contactName: "",
        }
    }
    // componentDidMount()

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

Postings.propTypes = {
    postings: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

// mapStateToProps
// mapDispatchToProps
// export default connect(mapStateToProps, mapDispatchToProps)(Postings)

export default Postings;