import { actionTypes } from "./actionTypes";
import * as userApi from "../api/userApi"

const user = {
    addUser: (user) => {
        return { type: actionTypes.USER.ADD_USER, user }
    },
    loadUsersSuccess(users) {
        return { type: actionTypes.USER.LOAD_USERS_SUCCESS, users}
    },
    getUsers: () => {
        return (dispatch) => {
            return userApi
            .getUsers()
            .then((users) => 
                dispatch(users.loadUsersSuccess(users))
            )
            .catch((error) => console.log(error))
        }
    }
}

export { user }