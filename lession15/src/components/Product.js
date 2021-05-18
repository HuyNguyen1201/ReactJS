import { Component } from "react";

class Product extends Component{
  render (){
    var {match, history, location, staticContext} = this.props;
    var {name} = match.params;
    var keys = Object.keys(this.props);
    console.log(keys)
    return (
      <div>
        <h1>THis is product result page: {name}</h1>
        <h3>{'match-' + JSON.stringify(match)}</h3>
        <h3>{'history-' + JSON.stringify(history)}</h3>
        <h3>{'location-' + JSON.stringify(location)}</h3>
        <h3>{'staticContext-' + JSON.stringify(staticContext)}</h3>
         </div>
    )
  }
}
export default Product;
