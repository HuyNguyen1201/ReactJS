import { Component } from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as  Message from './../constants/Message'
import { actionAddToCart, actionChangeMessage, actionRemoveProductInCart, actionUpdateProductInCart } from "../actions";

class CartContainer extends Component {
  render() {
    var {cart} = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>

    );
  }
  showCartItem(cart){
    var result =<tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var {onChangeMessage, onRemove,onUpdateProduct} = this.props;
    if(cart.length > 0){
      result = cart.map((item, index)=>{
        return <CartItem key ={index} item = {item} index = {index} onRemove ={onRemove} onChangeMessage = {onChangeMessage}
        onUpdateProduct ={onUpdateProduct}
        >

        </CartItem>
      })
    }
    return result
  }
  showTotalAmount = (cart)=>{
    var result = null;
    if(cart.length > 0){
      result = <CartResult cart={cart}></CartResult>
    }
    return result;
  }
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      decription: PropTypes.string.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProduct: PropTypes.func.isRequired
}
const mapStateToProps = state=>{
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onRemove: (product)=>{
      dispatch(actionRemoveProductInCart(product))
    },
    onChangeMessage: (message)=>{
      dispatch(actionChangeMessage(message))
    },
    onUpdateProduct:(product, quantity)=>{
      dispatch(actionUpdateProductInCart(product, quantity))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);