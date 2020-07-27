import React from 'react';

const Heading = props => {

    console.log(props);
    return <h2 className={props.colorClass}>{props.content}</h2>;
}


export default Heading;