import { Component } from "react";
import { connect } from "react-redux"
import * as actions from "./../actions/index"
class TableData extends Component {
  onHandleDelTask (index){
    this.props.delTask(index);
  }

  render() {
    var elmTasks = this.props.tasks.map((task, index) => {
      return <tr key={index}>
        <td>{index}</td>
        <td>{task.name}</td>
        <td>{task.status}</td>
        <td>
          <button className="btn btn-danger" onClick={() =>this.onHandleDelTask(index)}>Delete</button>&nbsp;
          <button className="btn btn-warning" onClick={()=>{this.props.statusEdit(index, true)}}>Edit</button>
        </td>
      </tr>
    });
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {elmTasks}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    status: state.status
  }
}
const mapDispatchToProps = (dispatch, action) => {
  return {
    delTask: (index) => {
      dispatch(actions.delTask(index));
    },
    statusEdit:(index,isEdit)=>{
      dispatch(actions.statusEdit(index, isEdit));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);
