const intialState = {
    users: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
         return { ...state, users: action.value }
            default:
                return state;
    }
}