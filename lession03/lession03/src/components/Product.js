import { Component } from 'react';

class Product extends Component{
  render(){
    return (
      <div className="col-4">
        <h2>{this.props.name}</h2>
        <h5>{this.props.price}</h5>
        <a className= "btn btn-success">Mua ngay</a>
      </div>
    );
  }
}

export default Product;
