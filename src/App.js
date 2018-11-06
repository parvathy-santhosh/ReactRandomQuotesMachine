import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random Quotes Machine</h1>
          <hr className="hr"/>
          <QuoteMachine />
        </header>
      </div>
    );
  }
}

export default App;
