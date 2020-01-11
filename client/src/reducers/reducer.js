// import actions

const initialState = {
    // user: null
    examplePropOne: 'user'
}

const reducers = (state = initialState, action) => {
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

export default reducers;