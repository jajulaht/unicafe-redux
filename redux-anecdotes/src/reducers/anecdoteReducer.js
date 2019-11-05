import anecdoteService from '../services/anecdotes'

// Action creator functions
export const voteOf = (data) => {
  return async dispatch => {
    console.log('update', data)
    const updatedAnecdote = await anecdoteService.update(data.id, data)
    console.log('id', updatedAnecdote.id)
    dispatch ({
      type: 'VOTE',
      data: updatedAnecdote.id
    })
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data: newAnecdote    
    })
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch ({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
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
      const id = action.data
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