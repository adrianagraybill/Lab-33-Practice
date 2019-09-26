import React, {useState} from 'react';
import Increment from '../increment/increment';

const Count = (props) => {

  //const [count, setCount] = useState(0);

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%',
    },
    counter: {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em',
    },
    button: {
      height: '3em',
    },
  };

  return (
    <div style={styles.container}>
      
      <span style={styles.counter}>{props.banana.counter}</span>
      
    </div>
  );
};

export default Count;
