import logo from './logo.svg';
import './App.css';
import TableData from './components/TableData'
import TaskForm from './components/TaskForm'
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <TaskForm></TaskForm>
        </div>
        <div className ="col-8">
          <TableData></TableData>
        </div>
      </div>
    </div>
  );
}

export default App;
