const notificationAtStart = 
  'This is the first notification for development purposes.'

const initialState = notificationAtStart

// Action creator function
export const createNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: content
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return state.concat(action.data)
    default:
      return state
  }
}

export default notificationReducer