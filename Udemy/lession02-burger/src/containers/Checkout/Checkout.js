import { Component } from "react";
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index'
class Checkout extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render() {
        let summary = <Redirect to='/'></Redirect>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/'></Redirect> : null
            summary =
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        price={this.props.price}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinue={this.checkoutContinueHandler}
                    ></CheckoutSummary>
                    <Route path={this.props.match.path + '/contact-data'}
                        render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price}{...props}></ContactData>)}
                    ></Route>
                </div>
        }
        return (
            <div>
                {summary}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}
export default connect(mapStateToProps)(Checkout);