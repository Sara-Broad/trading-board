import { actionTypes } from "./actionTypes";

const auth = {
    LOGIN_SUCCESS: (value) => {
        return { type: actionTypes.AUTH.LOGIN_SUCCESS, value }
    }
}

export { auth }