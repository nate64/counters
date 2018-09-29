import React from 'react'

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState( (state) => {
      return {value: state.value +1 }
    })
  }

  dec = () => {
    this.setState( (state) => {
      return { value: state.value - 1 }
  })
}

  mult = () => {
    this.setState( (state) => {
      return { value: state.value * 10 }
    })
  }

  div = () => {
    this.setState( (state) => {
      return { value: state.value / 10 }
    })
  }

  
  render() {
    return (
      <div className="App"> 
        <header className="App Header">
          <h1 className="App Title Counter"> </h1>
        </header>
        <div>
          <p>{this.props.name}</p>
          <h1>{this.state.value}</h1>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
          <button onClick={this.mult}>* 10</button>
          <button onClick={this.div}>/ 10</button>
        </div>
      </div>
          
    );
  }
}

export default Counter;