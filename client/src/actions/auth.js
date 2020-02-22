import { actionTypes } from "./actionTypes";

const auth = {
    addUser: (value) => {
        return { type: actionTypes.AUTH.ADD_USER, value }
    }
}