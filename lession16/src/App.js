import { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div className='App'>
            {/* Menu  */}
            <Menu></Menu>  {/* action */}
            {/* Content  */}
            <Switch> {/* address*/}
              {this.showContentMenu(routes)}
            </Switch>
          </div>

        </Router>
        {/* container  */}
      </div>
    );
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
        )
      })
    }
    return result;
  }
}


export default App;
