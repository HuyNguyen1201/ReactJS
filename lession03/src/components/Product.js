import { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(){
    console.log(this.props.name)
  }
  onAddToCart2 = ()=>{
    console.log(this.props.name)
  }
  render() {
    return (
      <div className="col-4">
        <h2>{this.props.name}</h2>
        <h5>{this.props.price}</h5>
        <a className="btn btn-success" onClick ={this.onAddToCart2} >Mua ngay</a>
      </div>
    );
  }
}

export default Product;
