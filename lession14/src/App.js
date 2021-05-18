import { Component } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import {connect} from 'react-redux'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer ";

class App extends Component {
  render() {
    
    return (
      <div>
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer></ProductsContainer>
            <MessageContainer></MessageContainer>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
};
const mapStateToProps = state =>{
  return {
    products: state.product
  }
}
export default connect(mapStateToProps, null)(App);