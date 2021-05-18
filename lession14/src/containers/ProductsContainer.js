import { Component } from "react";
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types'
import {actionAddToCart, actionChangeMessage} from './../actions/index'

class ProductsContainer extends Component {
  render() {
    var {products} = this.props;
    
    return (
      <Products>
        {this.showProducts(products)}
      </Products>

    );
  }
  showProducts(products){
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;
    if(products.length > 0){
      result = products.map((product, index)=>{
        return  <Product 
        key = {index} 
        product = {product} 
        onChangeMessage = {onChangeMessage}
        onAddToCart = {onAddToCart}
        >
        </Product>
      })
    }
    return result
  }
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      decription: PropTypes.string.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
}



const mapStateToProps = state =>{
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onAddToCart:(product) =>{
      dispatch(actionAddToCart(product, 1))

    },
    onChangeMessage:(message)=>{
      dispatch(actionChangeMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);