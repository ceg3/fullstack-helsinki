import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getMostVoted(votes) {
  let idx = 0;
  for(let i = 1; i< votes.length; i++) {
    if(votes[i] > votes[idx]) {
      idx = i
    }
  }
  return idx
}

const Header = ({text}) => <h2>{text}</h2>

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({text, votes}) => (
  <div>
    <p> {text} </p>
    <p> has {votes} votes </p>
  </div>
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setRandom = (selected) => setSelected(selected)
  const addVote = (votes) => {
    const newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }

  const idx = getMostVoted(votes)

  //console.log(votes)
  

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
      <Button text="next anecdote"   handleClick={ () => setRandom(getRandomInt(8)) } /> 
      <Button text="vote"   handleClick={ () => addVote(votes) } /> 
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[idx]} votes={votes[idx]}/>
    </div>
  )
}

export default App