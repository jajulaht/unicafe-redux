import React from 'react'
import {
  createAnecdote
} from '../reducers/anecdoteReducer'
import { createNotification, deleteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  // Function for adding anecdote and displaying notification
  const addAnecdote = async (event) => {
    event.preventDefault()
    const element = event.target
    const content = event.target.anecdote.value
    props.createAnecdote(content)
    element.anecdote.value = ''
    props.createNotification(`You added '${content}'`)
    setTimeout(() => {
      props.deleteNotification()
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

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log('aform', state)
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
  deleteNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm