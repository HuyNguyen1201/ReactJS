import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from './Product'
class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'iphone',
        name: 'Iphone x',
        price: 35000000
      },
      {
        id: 2,
        slug: 'samsung',
        name: 'Samsung galaxy s7',
        price: 315000000
      },
      {
        id: 3,
        slug: 'Oppo',
        name: 'Oppo f1s',
        price: 7000000
      },
    ]
    var { match } = this.props;
    var url = match.url;
    // console.log(match);
    var result = products.map((product, index) => {
      return <NavLink to={`${url}/${product.slug}`} key={index}>
        <li key={index} className="list-group-item">
          {product.id} - {product.name} - {product.price}
        </li>
      </NavLink>
    })
    var {location} = this.props;
    console.log(location);
    return (
      <div className='container'>
        <h1>This is products</h1>

        <div className="row">
          <ul className="list-group">
            {result}
          </ul>

        </div>

        <div className='row'>
          <Route path = '/products/:name' component = {Product}>

          </Route>
        </div>
      </div>
    )
  }
}

export default Products;
