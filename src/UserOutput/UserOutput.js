import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My Username is {props.userName}.</p>
            <p>I am a User!</p>
        </div>
    )
}

export default userOutput;