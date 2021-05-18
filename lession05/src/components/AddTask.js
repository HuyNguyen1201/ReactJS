import { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dasds',
      status: 0
    }
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.name, this.state.status);
  }

  render() {

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Thêm công việc</div>
        <div className="panel-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label>Tên:</label>
              {/* <input type="text"
                className="form-control"
                value={this.state.name} name="name"
                onChange={this.onHandleChange} 
                /> */}
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="form-group">
              <label>Trạng thái:</label>
              <select className="form-control" name="status" onChange={this.onHandleChange}>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích hoạt</option>
              </select>
            </div>
            <button className="btn btn-warning" type="submit">Lưu lại</button>&nbsp;
                  <button className="btn btn-danger"> Hủy bỏ</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
