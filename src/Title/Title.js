import React from 'react';

import './Title.css';

const Title = props => {
  return (
        <h2 className="Title">{props.txt}</h2>
  );
};

export default Title;
