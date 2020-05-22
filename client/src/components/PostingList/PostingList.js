// import React, { Component } from "react"
// import PropTypes from "prop-types"

// class PostingList extends Component {
//     render() {
//         return (
//             <div>
//                 <h5>Props Go Here</h5>
//             </div>
//         )
//     }
// }

// export default PostingList

import React from "react"
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const PostingList = ({ postings }) => (
    <table className="table">
        <thead>
            <tr>
                <th />
                <th>Title</th>
                <th>Description</th>
                <th>City</th>
                <th>State</th>
                <th>neighorhood</th>
                <th>Contact Name</th>
            </tr>
        </thead>
        <tbody>
            {postings.map(posting => {
                return (
                    <tr key={posting.id}>
                        {/* <td>
                            <Link to={"/postings/" + user.slug}></Link>
                        </td> */}
                        <td>{posting.title}</td>
                        {/* <td>{posting.description}</td>
                        <td>{posting.city}</td>
                        <td>{posting.state}</td>
                        <td>{posting.neighorhood}</td>
                        <td>{posting.contactName}</td> */}
                    </tr>
                )
            })}
        </tbody>
    </table>
)

PostingList.propTypes = {
    postings: PropTypes.array.isRequired
}

export default PostingList;