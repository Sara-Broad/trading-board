import { actionTypes } from "./actionTypes";

const user = {
    addUser: (value) => {
        return { type: actionTypes.USER.ADD_USER, value }
    }
}

export { user }