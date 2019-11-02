import React from 'react'
import {
  voteOf
} from '../reducers/anecdoteReducer' 
import { createNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  // Arrange anecdotes by votes in descending order
  const arrangedAnecdotes = anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  const vote = (id, content) => {
    store.dispatch(voteOf(id))
    store.dispatch(createNotification(`You voted '${content}'`))
    setTimeout(() => {
      store.dispatch(deleteNotification())
    }, 5000)
  }
  return(
    <>
      {arrangedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList