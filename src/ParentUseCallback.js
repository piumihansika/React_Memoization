//Parent.js
import React, { useState, useCallback } from "react";
import Child from './ChildUseCallback';

export default function ParentUseCallback() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
      setCounter(counter + 1);
    };
  
    const onClick= useCallback(() => { //using useCallback() for the handler function
       console.log("handler");
    }, []);
  
    console.log("Parent render");
    return (
      <div className="App"><button onClick={handleClick}>Increase</button>
         <h2>{counter}</h2>
         <Child name={"joe"} childHandler={onClick} />
    </div>
    );
  }