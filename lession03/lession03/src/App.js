import './App.css';
import { Component } from 'react';
import Product from './components/Product'

class App extends Component {
  render() {
    var products = [
      {
        name: 'Iphone 7',
        price: 15000,
        status: true
      },
      {
        name: 'Samsung s7',
        price: 45000,
        status: false
      },
      {
        name: 'Vivo f1s',
        price: 12000,
        status: true
      },
    ]
    var element = products.map((product, index) => {
      if (product.status) {
        return <Product key={index} name={product.name} price={product.price} />

      }
    })
    return (
      <div>
        <div className='row align-conent-center container text-align-center'>
          <h2> This is heading</h2>
          {element}
        </div>
        <button className="btn btn-danger">
          Click me
          </button>
      </div>
    );
  }
}

export default App;
