import React from 'react';

const Child = (props) => {
    return (
        <div>
            <h2>I am child component</h2>
            <h3>{props.info}</h3>
        </div>
    );
};

export default Child;