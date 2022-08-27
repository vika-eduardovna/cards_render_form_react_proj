import React from 'react'
import Card from './Card'
import { users } from '../data/users'

export default function Cardslist() {

    const list_style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 350px)',
    }

    return (
        <div style={list_style}>
            {
                users.map(user => <Card key={user.id} {...user} />)
            }

        </div>
    )
}
