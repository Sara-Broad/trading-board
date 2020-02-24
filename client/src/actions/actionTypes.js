const actionTypes = {
    AUTH: {
        AUTH_ERROR: "AUTH_ERROR",
        LOGIN_SUCCESS: "LOGIN_SUCCESS",
        LOGIN_FAIL: "LOGIN_FAIL",
        REGISTER_SUCCESS: "REGISTER_SUCCESS",
        REGISTER_FAIL: "REGISTER_FAIL",
    },
    POSTING: {
        GET_POSTINGS: "GET_POSTINGS",
        ADD_POSTINGS: "ADD_POSTINGS",
        DELETE_POSTINGS: "DELETE_POSTINGS",
        EDIT_POSTINGS: "EDIT_POSTINGS"
    },
    USER: {
        ADD_USER: "ADD_USER"
    },
    MESSAGE: {
        LOAD_MESSAGES: "LOAD_MESSAGES"
    }
}

export { actionTypes }
