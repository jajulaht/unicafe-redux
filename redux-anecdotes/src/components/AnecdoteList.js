import React from 'react'
import {
  voteOf
} from '../reducers/anecdoteReducer' 
import { createNotification, deleteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
//import anecdoteService from '../services/anecdotes'

const AnecdoteList = (props) => {
  // Function for voting and displaying notification
  const vote = async ({ content, id, votes }) => {
    const data = {
      'content': content,
      'id': id,
      'votes': votes + 1
    }
    console.log('vote', data)
    props.voteOf(data)
    props.createNotification(`You voted '${content}'`)
    setTimeout(() => {
      props.deleteNotification()
    }, 5000)
  }

  return(
    <>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

// Prepare anecdotes that will be displayed
const anecdotesToShow = ({ anecdotes, filter }) => {
  // Arrange anecdotes by votes in descending order
  const arrangedAnecdotes = anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

  // Filter for anecdotes
  let anecdotesToShow = arrangedAnecdotes.filter(line => 
    line.content.toLowerCase().includes(filter.toLowerCase())
  )
  return anecdotesToShow
}

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log('alist', state)
  return {
    visibleAnecdotes: anecdotesToShow(state),
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