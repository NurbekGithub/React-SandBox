import React from 'react';

const Marketing = (props) => {

    const { item } = props;

    return (
        <div id="" className="marketing-col">
            <h3 className="title"> { item.title } </h3>
            <p className="text"> </p>
            <p className="footer"> </p>
        </div>
    );
}

export default Marketing;