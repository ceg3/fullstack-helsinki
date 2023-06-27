import React from 'react';
import Person from './Person'

const Persons = ({persons}) => {

    return (
        <table>
            <tbody>
                {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
            </tbody>
        </table>
    )
}

export default Persons
