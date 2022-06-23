//Child.js
import React from "react";

export function Child(props) {
    console.log("Child render");
    return (
      <div><h2>{props.name}</h2></div>
    );
  }
  
  export default React.memo(Child);