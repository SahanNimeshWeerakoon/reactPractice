import React from 'react'
import Person from './Person';

function NameList() {
    const people = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'business'
        },
        {
            id: 2,
            name: 'Cleak',
            age: 30,
            skill: 'reporter'
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'princess'
        }
    ]
    const peopleList = people.map(person => <Person key={person.id} person={person} /> )
    return (
        <div>
        { peopleList }
        </div>
    )
}

export default NameList