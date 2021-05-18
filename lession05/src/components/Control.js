import { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnIsShow: false,
      textSearch: '',
    }
  }
  btnAddTask = () => {
    this.setState({
      btnIsShow: !this.state.btnIsShow
    })
    this.props.isShow(this.state.btnIsShow);
  }
  onHandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.textSearch(this.state.textSearch);
    this.setState({
      textSearch: '',
    })
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.btnAddTask} ><i class="fa fa-plus" />&nbsp;Thêm công việc</button>
        <form className="mt-10 d-flex justify-content-start" onSubmit={this.onHandleSubmit}>
          <div className="d-flex justify-content-start" >
            <input type="text" placeholder="Search.." value={this.state.textSearch} name="textSearch" className="form-control" onChange={this.onHandleChange} />
            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i>Search</button>
          </div>
              &nbsp;
              <div className="btn-group">
            <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sắp xếp</button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Tên A-Z</a>
              <a className="dropdown-item">Tên Z-A</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item">Trạng thái kích hoạt</a>
              <a className="dropdown-item">Trạng thái ẩn</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Control;
