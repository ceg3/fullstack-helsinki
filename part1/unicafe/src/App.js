import { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {

  return( 
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const avg = (good - bad) / all
  const pos = 100 * (good / all)

  if( all === 0 ) {
    return ( <div> no feedback given </div>)
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={pos + " %"} />
      </tbody>
    </table>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (good) => setGood(good)
  const setToNeutral = (neutral) => setNeutral(neutral)
  const setToBad = (bad) => setBad(bad)

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good"    handleClick={ () => setToGood(good + 1) } />
      <Button text="neutral" handleClick={ () => setToNeutral(neutral + 1) }  />
      <Button text="bad"     handleClick={ () => setToBad(bad + 1) }  />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App