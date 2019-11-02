import React from 'react'
import { createFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.store.dispatch(createFilter(event.target.value))
  }
  const style = {
    marginTop: 20,
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter