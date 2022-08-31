import React from 'react'

export default function Form({ add }) {
    const inputs_style = {
        display: 'flex',
        gap: '70px',
        margin: '50px 20px'
    };
    const btn_color = {
        backgroundColor: 'darkgrey',
        cursor: 'pointer',
        width: '100px',
        padding: '8px',
        color: 'white',
        borderStyle: 'none',
        borderRadius: '7px'
    }

    const submit = e => {
        e.preventDefault();
        const { first_name, last_name, avatar } = e.target;
        add(first_name.value, last_name.value);
        first_name.value = '';
        last_name.value = '';
    }
    return (
        <div>
            <form onSubmit={submit} style={inputs_style}>
                <input type="text" name='first_name' placeholder='Name' />
                <input type="text" name='last_name' placeholder='Lastname' />
                <button style={btn_color}>Add</button>
            </form>
        </div>
    )
}
