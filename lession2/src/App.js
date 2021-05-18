import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  showInfoProduct(product) {
    if (product.status == true) {
      return (
        <div className="ml-30">
          prodcut: {product.name} <br />
        Status: True
        </div>
      );
    }
  }
  render() {
    var a = 3;
    var b = 7;
    var product = {
      id: 1,
      name: 'Iphone 7',
      price: 150000,
      status: true
    }
    var users = [
      {
        id: 1,
        name: 'Nguyen Van A',
        age: 12
      },
      {
        id: 2,
        name: 'Nguyen Van B',
        age: 12
      },
      {
        id: 3,
        name: 'Nguyen Van C',
        age: 12
      }
    ]
    var elements = users.map((user, index) =>{
      return <div key={user.id}>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
      </div>
    })
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
              </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        {this.showInfoProduct(product)}
        <br/>
        <hr/>
        {elements}
      </div>
    );
  }
}

export default App;
