import React from 'react'
import Card from './Card'


export default function Cardslist({ users, remove }) {

    const list_style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 350px)',
    }

    return (
        <div style={list_style}>
            {
                users.map(user => <Card key={user.id} remove={remove} {...user} />)
            }

        </div>
    )
}
