import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [filter, setFilter ] = useState('')
  const [personsFiltered, setPersonsFiltered ] = useState(persons)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    const regex = new RegExp( event.target.value, 'i' );
    setPersonsFiltered(persons.filter(person => person.name.match(regex)))
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`) 
      setNewName('')
      setNewNumber('')     
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
      const temp = persons.concat(personObject)
      setPersons(temp)
      setNewName('')
      setNewNumber('')
      const regex = new RegExp( filter, 'i' );
      setPersonsFiltered(temp.filter(person => person.name.match(regex)))
    }
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add new person</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={personsFiltered} />

    </div>
  )
}

export default App