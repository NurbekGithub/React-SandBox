import React from 'react';

const Example = (props) => {

  const { item } = props;

  return (
    <div className="Example">
      {item.title}
    </div>
  ) 

}

export default Example;