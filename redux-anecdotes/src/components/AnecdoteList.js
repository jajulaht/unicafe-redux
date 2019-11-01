import React from 'react'
import {
  voteOf
} from '../reducers/anecdoteReducer' 

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState()

  // Arrange anecdotes by votes in descending order
  const arrangedAnecdotes = anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  const vote = (id) => {
    store.dispatch(voteOf(id))
  }
  return(
    <>
      <h2>Anecdotes</h2>
      {arrangedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList