import { Component } from 'react';
import { Route, Link } from 'react-router-dom'




const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lí sản phẩm',
        to: '/product-list',
        exact: false
    },
]
const MenuLink  = ({label, to , activeOnlyWhenExact}) =>{
    return (
        <Route path = {to} exact = {activeOnlyWhenExact} children ={({match})=>{
            var active = match ?'active':'';
            return (
                <li className = {active}>
                    <Link to= {to} className = 'my-link'>{label}</Link>
                </li>
            )
        }}></Route>
    )
}
class Menu extends Component {
    showMenu(menus){
        var result = null;
        if(menus.length> 0 ){
            result = menus.map((menu, index)=>{
                return <MenuLink key= {index} label = {menu.name} to = {menu.to} activeOnlyWhenExact = {menu.exact}/>
            })
        }
        return result;
    }
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CAll Api</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
   
}


export default Menu;
