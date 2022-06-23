//Parent.js
import React, {Component} from 'react';
import Child from './ChildPureComponent';

class ParentPureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    console.log("Parent render");
    return (
      <div className="App"><button onClick={this.onClick}>Update Counter</button>     
            <h2>{this.state.count}</h2>
            <Child name={"child"} />
      </div>
    );
  }
}

export default ParentPureComponent;