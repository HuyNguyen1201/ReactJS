import { Component } from "react";
import logo from './../../images/logo.png';
import Navigation from './../Navigation/index'
class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt = {'logo'}/>
                <Navigation></Navigation>
            </div>
        )
    }
}
export default Header;