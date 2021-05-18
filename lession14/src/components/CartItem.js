import { Component } from "react";
import * as Message from './../constants/Message'
class CartItem extends Component {
  render() {
    var { item, onUpdateProduct } = this.props;
    return (

      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
            >
              <a href='/#'>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
            >
              <a href='/#'>+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onRemove(item.product)}
          >
            X
                                        </button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    var { onUpdateProduct, onChangeMessage } = this.props;
    if (quantity > 0) {
      onUpdateProduct(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
    }
  }
  onRemove(product) {
    var { onRemove, onChangeMessage } = this.props;
    onRemove(product);
    onChangeMessage(Message.MSG_DELETE_IN_CART_SUCCESS)
  }
};
export default CartItem;