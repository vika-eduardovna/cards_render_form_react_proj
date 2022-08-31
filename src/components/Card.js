import React from 'react'
import { useState } from 'react';



export default function Card({ id, first_name, last_name, avatar, remove }) {

    const [turnCard, setTurnCard] = useState(true);

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
        <div style={card_style} onDoubleClick={() => setTurnCard(!turnCard)}>
            <img src={turnCard ? avatar : 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png'} alt="ups.." style={img_style} />
            <div style={{ display: 'flex', gap: '8px' }}>
                <p>{turnCard ? first_name : '******'}</p>
                <p>{turnCard ? last_name : '******'}</p>
            </div>
            <button style={btnStyle} onClick={() => remove(id)}>Remove</button>
        </div>
    )
}
