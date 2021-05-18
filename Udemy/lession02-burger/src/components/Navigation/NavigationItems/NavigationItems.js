import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/* <NavLink to="/" active={true}> Burger Bulder</NavLink>
        <NavLink to="/checkout" >Checkout</NavLink> */}
        <NavigationItem link='/' exact>Burger Bulder</NavigationItem>
        {props.isAuthenticated ?
            <NavigationItem link='/orders' >Orders</NavigationItem> :
            null
        }
        {props.isAuthenticated ?
            <NavigationItem link='/logout' >Logout</NavigationItem> :
            <NavigationItem link='/auth' >Authenticate</NavigationItem>
        }
    </ul>
);
export default navigationItems;