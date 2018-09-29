import React, { Component } from 'react';
//import logo from './Uvto.jpg';
//<img src={logo} className="counter" alt="logo" />
import './App.css';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-Title">Counter Example App</h1>
        </header>
        <div>
          <Counter name="bicycles" />
          <Counter name="aligators" />
          <Counter name="parachutes" />
          <Counter name="big dumb animal" />
        </div>
      </div>
    )
  }
}

export default App;
