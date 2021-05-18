import React, { Component } from "react";
// import { Transition } from 'react-transition-group'
import {CSSTransition} from 'react-transition-group'
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    closed: true,
    showBlock: false
  }
  onCloseBackdropHandler = () => {
    this.setState({ closed: true })
  }
  onOpenBackdropHandler = () => {
    this.setState({ closed: false })
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className='Button' onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle</button>
        <br></br>
        <CSSTransition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state =>
            <div style={
              {
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }
            }></div>}
        </CSSTransition>
        <Modal closed={this.onCloseBackdropHandler} show={!this.state.closed} />
        {this.state.closed ? null : <Backdrop show={!this.state.closed} />}
        <button className="Button" onClick={this.onOpenBackdropHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;