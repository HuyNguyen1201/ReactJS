import { Component } from 'react';
import {Prompt} from 'react-router-dom'
class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }
  render(){
    var {isChecked} = this.state;
    return (
      <div>
        This is contact
        <p>{isChecked === false?'False': 'True'}</p>
        <button type="button" className="btn btn-info" onClick= {()=>{this.setState({isChecked: false})}}>Allow</button>
        <button type="button" className="btn btn-danger" onClick= {()=>{this.setState({isChecked: true})}}>Dont Allow</button>
        <Prompt
          when={isChecked}
          message = {location=>(`Bạn có chắc chắn muốn thoát ${location.pathname}`)}

        >

        </Prompt>
      </div>
    );
  }
}


export default Contact;
