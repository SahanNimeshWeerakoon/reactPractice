import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Cleark', 'Barrey']
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
    const namesList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2> )
    return (
        <div>
        { namesList }
        </div>
    )
}

export default NameList