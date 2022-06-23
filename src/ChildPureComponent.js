//Child.js
import React, {Component, PureComponent} from 'react';
class Child extends React.PureComponent { 
  render() {
    console.log("Child render");
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Child;