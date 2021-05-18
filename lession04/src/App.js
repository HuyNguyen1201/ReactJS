import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'ee',
      sltGender: 1,
      username: '',
      password: '',
      rdLang: 'vni',
      chkbAccept: true

    }
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="row container">
        <div className="col-8">
          <div className="panel panel-primary">
            <div className="panel-heading">Form</div>
            <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <label className="form-group-label">Username</label>
                  <input type="text" className="form-control" name='username' onChange={this.onHandleChange}></input>
                </div>
                <div className="form-group">
                  <label className="form-group-label">Password</label>
                  <input type="password" className="form-control" name='password' onChange={this.onHandleChange}></input>
                </div>
                <div className="form-group">
                  <label className="form-group-label">Describe</label>
                  <textarea type="password" className="form-control" name='content' placeholder={this.state.content} onChange={this.onHandleChange}></textarea>
                </div>
                <select className="form-control" name="sltGender" onChange={this.onHandleChange} value={this.state.sltGender}>
                  <option value={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
                <label>Language: </label>
                <div className="radio" >
                  <label>
                    <input type="radio" name="rdLang" value="eng" onChange={this.onHandleChange} checked={this.state.rdLang === 'eng'}></input>
                    Eng
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="rdLang" value="vni" onChange={this.onHandleChange} checked={this.state.rdLang === 'vni'}></input>
                    VNI
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-ladbel">
                    <input type="checkbox" className="form-check-input" name="chkbAccept" checked = {this.state.chkbAccept} onChange={this.onHandleChange} />
                      Accept
                  </label>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="panel panel-primary">
            <div className="panel-heading">Form</div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label className="">Demo</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
