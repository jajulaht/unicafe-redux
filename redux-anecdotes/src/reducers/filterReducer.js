const initialState = ''

// Action creator functions
export const createFilter = (content) => {
  return {
    type: 'NEW_FILTER',
    data: content
  }
}
export const deleteFilter = () => {
  return {
    type: 'DEL_FILTER',
  }
}

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_FILTER':
      return action.data
    case 'DEL_FILTER':
      return initialState
    default:
      return state
  }
}

export default filterReducer