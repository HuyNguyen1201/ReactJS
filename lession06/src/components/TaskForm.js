
import { Component } from "react";
import { connect } from 'react-redux'
import * as actions from './../actions/index'
class TaskFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true,
      placeHoler: false
    }
  }
  //**********************************Handle//**********************************
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log('name',this.props.status)
    if (this.props.status.index !== -1) {
      this.props.tasks[this.props.status.index].name = "d";
    }
    else {
      this.props.onAddTask(this.state)
    }
  }
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onHanldePutName=()=>{
    if(this.props.status.isEdit === true){
      console.log(this.props.tasks[this.props.status.index])
      this.setState({
        name: this.props.tasks[this.props.status.index].name,
      })
      this.props.statusEdit(this.props.status.index, false)
      return this.state.name
    }
    return this.state.name
  }
  render() {
    return (
      <div className="panel panel-warning">
        <h3>{this.props.status.edit === true ? 'True' : 'False'}</h3>
        <div className="panel-heading">{this.props.status.edit === true?'Edit task':'Add task'}</div>
        <div className="panel-body">
          <form onSubmit={this.onHandleSubmit}>
            <div class="form-group">
              <label for="">Name</label>
              <input type="text" name="name"
                class="form-control"
                value={this.onHanldePutName()}
                onChange={this.onHandleChange} />
              <label for="">Status</label>
              <select className="form-control" name="status" onChange={this.onHandleChange}>
                <option value="Active" >Active</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    status: state.status
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    },
    statusEdit: (index, isEdit)=>{
      dispatch(actions.statusEdit(index, isEdit))
    },
    editTask: (index) => {
      dispatch(actions.editTask(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFrom);
