import React from 'react'
import {
  createAnecdote
} from '../reducers/anecdoteReducer'
import { createNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.store.dispatch(createAnecdote(content))
    event.target.anecdote.value = ''
    props.store.dispatch(createNotification(`You added '${content}'`))
    setTimeout(() => {
      props.store.dispatch(deleteNotification())
    }, 5000)
  }

  return(
    <>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm