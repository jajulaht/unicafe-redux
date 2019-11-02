import React from 'react'
import {
  voteOf
} from '../reducers/anecdoteReducer' 
import { createNotification, deleteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const search = props.filter

  // Arrange anecdotes by votes in descending order
  const arrangedAnecdotes = anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  // Filter for anecdotes
  let anecdotesToShow = arrangedAnecdotes.filter(line => 
    line.content.toLowerCase().includes(search.toLowerCase())
  )

  const vote = (id, content) => {
    props.voteOf(id)
    props.createNotification(`You voted '${content}'`)
    setTimeout(() => {
      props.deleteNotification()
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

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log('alist', state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteOf,
  createNotification,
  deleteNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList