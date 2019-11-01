import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ store }) => {
  let good = store.getState().good
  let neutral = store.getState().ok
  let bad = store.getState().bad
  let all = good + neutral + bad
  let avg = 0
  let pos = 0
  if (all !== 0) {
    avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all
    pos = (good / all * 100) + " %"
    return (
      <>
      <h2>Yhteenveto</h2>
      <table>
        <tbody>
          <Statistic text="Hyvä" value={good} />
          <Statistic text="Neutraali" value={neutral} />
          <Statistic text="Huono" value={bad} />
          <Statistic text="Kaikki palautteet" value={all} />
          <Statistic text="Keskiarvo" value={avg} />
          <Statistic text="Positiiviset" value={pos} />
        </tbody>
      </table>
      </>
    )
  }
  else {
    return (
      <>
      <h2>Yhteenveto</h2>
      <p>Ei vielä palautetta.</p>
      </>
    )
  }
}

export default Statistics