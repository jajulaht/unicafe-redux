import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import Statistics from './components/Statistics'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={good}>hyvä</button> 
      <button onClick={ok}>neutraali</button> 
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <Statistics store={store} />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
