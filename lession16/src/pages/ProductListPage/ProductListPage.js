import { Component } from 'react';
import { Link } from 'react-router-dom'
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from './../../components/ProductList/ProductList'
import { connect } from 'react-redux'
import callApi from './../../utils/apiCaller'
import {actDeleteProductRequest, actFetchProductsRequest} from './../../actions/index'
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    })
    return result
  }
  render() {
    var {products} = this.props;
    // var { products } = this.state;

    return (
      <div className="row container">
        <div className="col-4">

          <Link to='/product/add' className="btn btn-info mb-10">Thêm sản phẩm</Link>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>


        </div>
      </div>

    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} onDelete={this.props.deleteProduct}></ProductItem>
      })
    }
    return result;
  }
}
const mapStateToProps = (state) => {
  return ({
    products: state.products
  })
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
    fetchAllProducts: () =>{
      dispatch(actFetchProductsRequest())
    },
    deleteProduct: (id)=>{
      dispatch(actDeleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
