import React from 'react';

const Marketing = (props) => {

    const { item } = props;

    return (
        <div className="marketing-col">
            <h3> { item.title } </h3>
            <p> { item.text } </p>
            <p> { item.footer } </p>
        </div>
    );
}

export default Marketing;