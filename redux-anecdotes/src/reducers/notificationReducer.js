const initialState = null

// Action creator functions
export const createNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: content
  }
}
export const deleteNotification = () => {
  return {
    type: 'DEL_NOTIFICATION',
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
    case 'DEL_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export default notificationReducer