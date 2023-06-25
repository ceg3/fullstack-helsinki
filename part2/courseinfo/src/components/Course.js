
const Header = ({name}) => <h2>{name}</h2>

const Part = ({name,exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => (
    <div>
        {parts.map(({id,name,exercises}) => <Part key={id} name={name} exercises={exercises} />)}
    </div> 
)

const Total = ({parts}) => {
    const value = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p>Number of exercises {value}</p>
    )
}


const Course = ({course}) => {

    return (
    <div>
        <Header  name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
    )

}

export default Course