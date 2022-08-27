import React from 'react'
import { users } from '../data/users'


export default function Card({ id, first_name, last_name, avatar }) {
    const card_style = {

        width: '212px',
        height: '70%',
        border: '1px solid black',
        fontSize: '35px',
        padding: '25px',
        margin: '30px 20px'
    };

    const img_style = {
        width: '200px',
        height: '145px',
        objectFit: 'cover'
    };

    const btnStyle = {
        width: '200px',
        height: '40px',
        cursor: 'pointer',
        marginBottom: '20px'

    }

    return (
        <div style={card_style}>
            <img src={avatar} alt="#" style={img_style} />
            <p>{first_name} {last_name}</p>
            <button style={btnStyle}>Remove</button>
        </div>
    )
}
