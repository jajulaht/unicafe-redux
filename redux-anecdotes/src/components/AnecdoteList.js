import React from 'react'
import {
  voteOf
} from '../reducers/anecdoteReducer' 
import { createNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const search = store.getState().filter

  // Arrange anecdotes by votes in descending order
  const arrangedAnecdotes = anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  // Filter for anecdotes
  let anecdotesToShow = arrangedAnecdotes.filter(line => 
    line.content.toLowerCase().includes(search.toLowerCase())
  )

  const vote = (id, content) => {
    store.dispatch(voteOf(id))
    store.dispatch(createNotification(`You voted '${content}'`))
    setTimeout(() => {
      store.dispatch(deleteNotification())
    }, 5000)
  }
  return(
    <>
      {anecdotesToShow.map(anecdote =>
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