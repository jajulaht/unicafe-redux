// Action creator function
export const voteOf = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: 
      content    
  }
}
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1 
      }
      return state.map(note =>
        note.id !== id ? note : changedAnecdote 
      )
    default:
      return state
  }
}

export default anecdoteReducer