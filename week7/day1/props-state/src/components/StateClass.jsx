import React, { Component } from 'react'

export default class StateClass extends Component {
  state = {

    value: 0
  };

  handleIncrementClick = () => {

    this.setState({value: this.state.value + 1} )

  };

  handleDecrementClick = () =>{
    this.setState({value: this.state.value - 1})
  }


  render() {
    return (
      <div>
        {this.state.value}

        <button onClick={()=> this.handleIncrementClick()}>mas</button>
        <button onClick={()=> this.handleDecrementClick()}>menos</button>
      </div>
    )
  }
}
