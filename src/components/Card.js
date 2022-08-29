import React from 'react'



export default function Card({ id, first_name, last_name, avatar, remove }) {
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
    const check_avatar = avatar ?? 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png'
    return (
        <div style={card_style}>
            <img src={check_avatar} alt="ups.." style={img_style} />
            <p>{first_name} {last_name}</p>
            <button onClick={() => remove(id)} style={btnStyle}>Remove</button>
        </div>
    )
}
