import './App.css';
import { Component } from 'react';
import ColorPicker from './components/ColorPicker'
import FontSize from './components/FontSize'
import Result from './components/Result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }
  // change color 
  onSetColor = (params) => {
    this.setState({
      color: params
    })
    console.log(this.state.color)
  }
  // change font size 
  onSetFontSize = (params) => {
    this.setState({
      fontSize: this.state.fontSize + params
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className='text-info'>Color Picker</h1>
          <div className="row">
            <div className="col-6">
              <ColorPicker color={this.state.color} fontSize={this.props.fontSize} onReceiveColor={this.onSetColor}>
              </ColorPicker>
            </div>
            <div className="col-6">
              <FontSize fontSize={this.state.fontSize} changeFontSize={this.onSetFontSize}></FontSize>
            </div>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
        </div>
      </div>
    );
  }
}

export default App;
