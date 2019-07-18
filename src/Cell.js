import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleClick = () => {
    const newColor = this.props.getSelectedColor();
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

// find a way to access the currently selected color from Matrix's state 
// without passing the value explicitly as a prop. 
// (Consider passing a method from Matrix to Cell instead. 
// You will want to create an additional method in Matrix to do this.)
// implement a handleClick method that 
// updates the Cell's state with the current selected color