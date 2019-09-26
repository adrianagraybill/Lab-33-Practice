import React from 'react';

const increment = (props)=> {
  return (
    <button  onClick={props.incrementCounter}> + </button>
  )
  
};

export default increment;