import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions
// bindActionCreators?

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

// mapStateToProps
// mapDispatchToProps
// export default connect(mapStateToProps, mapDispatchToProps)(Postings)

export default Postings;