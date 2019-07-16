import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleOnClick = (event) => {
    let newColor = event.target.style.backgroundColor;
    this.props.changeColor(newColor)
  }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.handleOnClick}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
