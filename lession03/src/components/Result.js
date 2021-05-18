import { Component } from 'react';

class Result extends Component {
  showFontColor(){
    return {
      fontSize:this.props.fontSize,
      color: this.props.color
    }
  }
  render() {
    return (
      <div>
        <h3>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</h3>
        <input type="input" className = "form-control ipFont" style = {this.showFontColor()} refs = "content"></input>
      </div>
    );
  }
}

export default Result;
