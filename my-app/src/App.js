import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-6">
            <Product/>
        </div>
          <div className="col-6">
          <Product/>
        </div>
        </div>
      </div>
    );
  }
}
export default App;
