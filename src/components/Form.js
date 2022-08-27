import React from 'react'

export default function Form() {
    const inputs_style = {
        display: 'flex',
        gap: '70px',
        margin: '30px auto'
    };
    const btn_color = {
        backgroundColor: 'darkgrey',
        width: '100px',
        padding: '8px',
        color: 'white',
        borderStyle: 'none',
        borderRadius: '7px'
    }


    return (
        <div>
            <form style={inputs_style}>
                <input type="text" name='first_name' placeholder='Name' />
                <input type="text" name='last_name' placeholder='Lastname' />
                <button style={btn_color}>Add</button>
            </form>
        </div>
    )
}
