import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
      <Notification store={props.store} />
    </div>
  )
}

export default App