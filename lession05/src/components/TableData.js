
import { Component } from "react";

class TableData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var element = this.props.tasks.map((task, index) => {
      console.log(this.props.textSearch)
      // if (this.props.textSearch === '') {
      if (this.props.textSearch === '' || task.name.toLowerCase().includes(this.props.textSearch.toLowerCase())) {
        return <tr key={index}>
          <td>{index}</td>
          <td>{task.name}</td>
          <td>{task.status}</td>
          <td className="text-center">
            <button className="btn btn-warning">Sửa</button>&nbsp;
                  <button className="btn btn-danger" onClick={() => this.props.delTask(index)}>Xóa</button>
          </td>
        </tr>
      }

    }
      // return ''

    );
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {element}
        </tbody>
      </table>
    );
  }
}

export default TableData;
