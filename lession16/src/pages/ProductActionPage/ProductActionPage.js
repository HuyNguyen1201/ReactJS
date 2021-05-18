import { Component } from 'react';
import { connect } from 'react-redux'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index'
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }
  componentDidMount() {
    var { match, actGetProduct } = this.props;
    if (match) {
      var id = match.params.id;
      actGetProduct(id)
    }
  }
  componentWillReceiveProps(nextprops) {
    var { itemEditing } = nextprops
    this.setState({
      id: itemEditing.id,
      txtName: itemEditing.name,
      txtPrice: itemEditing.price,
      chkbStatus: itemEditing.status
    })
    console.log()
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onSave = e => {
    e.preventDefault();
    var { history, match } = this.props;
    if (typeof match !== "undefined") {
      var {actUpdateProduct} = this.props
      actUpdateProduct({
        id: this.state.id,
        name: this.state.txtName,
        price: Number(this.state.txtPrice),
        status: this.state.chkbStatus
      })
    }
    else {
      var { actAddProduct } = this.props;
      actAddProduct({
        name: this.state.txtName,
        price: Number(this.state.txtPrice),
        status: this.state.chkbStatus
      })
    }
    history.goBack();

  }
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={this.onSave}>

          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input type="text" value={txtName} onChange={this.onChange} className="form-control" id="" name="txtName" />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input type="text" value={txtPrice} onChange={this.onChange} className="form-control" id="" name='txtPrice' />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value={chkbStatus} onChange={this.onChange} checked={chkbStatus} name='chkbStatus' />
              Còn hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary" >Lưu lại</button>
        </form>

      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddProduct: (product) => {
      dispatch(actAddProductRequest(product))
    },
    actGetProduct: (id) => {
      dispatch(actGetProductRequest(id))
    },
    actUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
