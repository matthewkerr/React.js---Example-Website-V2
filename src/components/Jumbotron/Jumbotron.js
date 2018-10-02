import React from 'react';

const jumbotron = (props) => {
    return (
            <div className={props.class}>{props.children}</div>
    );
};

export default jumbotron;