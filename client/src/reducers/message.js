const initialState = {
    // user: null
    examplePropOne: 'user'
}

export default (state = initialState, action) => {
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

