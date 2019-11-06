const initialState = null

// Action creator functions
export const createNotification = (content, time) => {
  return async dispatch => {
    console.log('time', time)
    dispatch ({
      type: 'NEW_NOTIFICATION',
      data: content,
    })
    setTimeout(() => {
      dispatch ({
        type: 'DEL_NOTIFICATION',
      })
    }, time * 1000)
  }
}
// export const deleteNotification = () => {
//   return {
//     type: 'DEL_NOTIFICATION',
//   }
// }

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