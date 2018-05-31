import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid #d5d5d5',
        borderRadius: '4px',
        margin: 'auto',
        padding: '10px',
        display: 'block'
    }
    return <input type="text" style={style} onChange={props.changed} value={props.username}/>
};

export default userInput;