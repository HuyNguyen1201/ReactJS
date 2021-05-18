import { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask'
import Control from './components/Control'
import TableData from './components/TableData'
import _ from 'lodash'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: "Nguyen Van A",
          status: 0,
        },
        {
          name: "Nguyen Van B",
          status: 487,
        }
      ],
      classBtn1: 'col-4 hidden',
      classBtn2: 'col-12',
      textSearch: ''
    }
  }
  addTask = (name, status) => {
    this.state.tasks.push({
      name: name,
      status: Number(status)
    });
    this.setState({
      tasks: this.state.tasks,
    });
  }
  isShowAddTask = (params) => { // true false
    // set show
    if (params === false) {
      this.setState({
        classBtn1: 'col-4',
        classBtn2: 'col-8'
      })
    }
    else {
      this.setState({
        classBtn1: 'col-4 hidden',
        classBtn2: 'col-12'
      })
    }
  }
  delTask = (index)=>{
    this.state.tasks.splice(index,1);
    this.setState({
      tasks:this.state.tasks,
    })
  }
  setTextSearch = (params)=>{
    this.setState({
      textSearch : params
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Quản lý công việc</h1>
        <hr></hr>
        <div className="row">
          <div className={this.state.classBtn1}>
            <AddTask addTask={this.addTask}></AddTask>
          </div>
          <div className={this.state.classBtn2}>
            <Control isShow={this.isShowAddTask} textSearch = {this.setTextSearch}></Control>
            <br></br>
            <TableData tasks={this.state.tasks} delTask = {this.delTask} textSearch = {this.state.textSearch}></TableData>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
