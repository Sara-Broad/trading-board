import { actionTypes } from "./actionTypes";

const user = {
    addUser: (user) => {
        return { type: actionTypes.USER.ADD_USER, user }
    }
}

export { user }