import React, { Component } from 'react';
import * as actions from '../actions'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import PostingList from '../components/PostingList/PostingList'
import { bindActionCreators } from 'redux';
const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    holding: {
        textAlign: 'center'
    }
}

class PostingsPage extends Component {
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
    componentDidMount() {
        const { postings } = this.props
        if (postings.length === 0) {
            this.props.loadPostings()
        }
    }

    render () {
        return (
            <div>
                <h3 style={( styles.header )}>Postings</h3>
                <div>
                    <h6 style={( styles.holding )}>Nothing to see here yet.</h6>
                    <PostingList postings={this.props.postings} />
                </div>
            </div>
        )
    }
}

PostingsPage.propTypes = {
    postings: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loadPostings: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { router, postings } = state
    return { router, postings }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...actions.posting }, dispatch),
        loadPostings: bindActionCreators(actions.posting.loadPostings, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostingsPage)
