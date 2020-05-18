import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserList = ({ users }) => (
    <table className="table">
        <thead>
            <tr>
                <th />
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>
                            <Link to={"/users/" + user.slug}></Link>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;