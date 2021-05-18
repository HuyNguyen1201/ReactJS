import { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue']
    }
  }
  showColor(color) {
    return {
      backgroundColor: color
    };
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return <button className={this.props.color === color?'col-3 btn-color  active': 
      'col-3 btn-color '} key={index} style={this.showColor(color)} onClick = {()=>this.props.onReceiveColor(color)}></button>
    })
    return (
      <div className="panel panel-info">
        <div className="panel-heading">Color Picker</div>
        <div className="panel-body row">
          {elmColors}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
