//Parent.js
import React, {Component} from 'react';
import Child from './ChildMemo';

const ParentMemo= () => {
    const [counter1, setCounter1] = React.useState(0)
    const [counter2, setCounter2] = React.useState(0)
  
    const incrementCounter1 = () => {
       setCounter1(counter1=> counter1+ 1)
    }
  
    return (
     <><button onClick={incrementCounter1}>Increment counter 1</button><Child value={counter1}>Counter 1</Child><Child value={counter2}>Counter 2</Child></>
    )
  }

  export default ParentMemo;