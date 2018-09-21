import React, { Component } from 'react';
import logo from '../logo.svg';
import Lifecycle from './lifecycles';

class Main extends Component {
  constructor(){
    super();
        this.state = {
      text: 'parent',
     };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the basic of New React 16x version</h1>
        </header>
        <button onClick={() => this.setState({text: 'parent changed' })}>change parent text</button>

        <Lifecycle text={this.state.text}/>
      </div>
    );
  }
}

export default Main;
