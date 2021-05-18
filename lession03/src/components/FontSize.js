import { Component } from 'react';
import reactDom from 'react-dom';

class FontSize extends Component {

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">Font Size: {this.props.fontSize}px</div>
        <div className="panel-body text-center">
          <button className="btn btn-success" onClick={() => this.props.changeFontSize(8)} disabled={this.props.fontSize > 50}>Increase</button>
          <button className="btn btn-success" onClick={() => this.props.changeFontSize(-8)} disabled={this.props.fontSize < 12}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default FontSize;
