import React from 'react';

const DemoOut = (props) => {
  return <p>{props.show ? 'this is new!' : ''}</p>;
};

export default React.memo(DemoOut);
