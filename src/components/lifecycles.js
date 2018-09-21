import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'child',
      parentText: '',
     };
  }

  // this method will be called before of every life cycle of the component is caled
  // this will have only updated stats or props 
  // we can't accesss the current props or state values inside

  //  You can return a setstate value by returning the json object 
  //  This can be replace of componentwillmount

  //  Main advantage is to reset any part of the state if any value changes
  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component
  
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps', nextProps, nextState)
    return {
      parentText: nextProps.text
    };
  }
 shouldComponentUpdate (nextProps, nextState) {
  console.log('shouldComponentUpdate', nextProps, nextState, 'state:', this.state)
return true;
 }

//  This method can be replace of ComponentWillReceiveProps and ComponentWillUpdate
// It take the previous state and props values as argument 
//  And we can able to access the current state and prop value in this method
// It enables your component to capture some information from the DOM (e.g. scroll position)
// before it is potentially changed. Any value returned by this lifecycle will be passed as a
// parameter to componentDidUpdate(). A snapshot value (or null) should be returned.

getSnapshotBeforeUpdate (prevProps, prevState) {
  console.log('getSnapshotBeforeUpdate',prevProps, prevState, this.props, this.state)
  return 'snapshot';
}
componentDidUpdate (prevProps, prevState, snapshot) {
  console.log('componentDidUpdate', snapshot)
}
componentDidMount() {
  console.log('componentDidMount')
}
  render() {
    const {text} = this.props;
    console.log('render')
    return (
      <div>
      <h1>{text}</h1>
      <h1>{this.state.text}</h1>
      <button onClick={() => this.setState({text: 'child changed' })}>change child text</button>
      </div>
    );
  }
};

export default Lifecycle;
