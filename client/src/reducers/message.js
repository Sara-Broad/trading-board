const initialState = {
    // user: null
    examplePropOne: 'user'
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        examplePropOne: 'newPropOne'
       }
    default:
     return state;
    }
}

export default messages;