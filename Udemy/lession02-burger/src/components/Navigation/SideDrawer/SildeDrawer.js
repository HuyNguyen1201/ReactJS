import React from 'react'
import Logo from './../../Logo/Logo'
import NavigationItems from './../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/ReactAux/ReactAux'

const sideDrawer = (props) => {
    let attatchClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attatchClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attatchClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}
export default sideDrawer;