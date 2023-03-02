
const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.text} {props.number}
      </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part text={props.part[0].text}  number={props.part[0].number} />
      <Part text={props.part[1].text}  number={props.part[1].number} />
      <Part text={props.part[2].text}  number={props.part[2].number} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part[0].number + props.part[1].number + props.part[2].number}</p>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {text: 'Fundamentals of React', number: 10},
    {text: 'Using props to pass data', number: 7},
    {text: 'State of a component', number: 14}
  ]
  
  return (
    <div>
      <Header courseName={course}/>
      <Content part={parts}/>
      <Total part={parts}/>
    </div>
  )

}

export default App;
