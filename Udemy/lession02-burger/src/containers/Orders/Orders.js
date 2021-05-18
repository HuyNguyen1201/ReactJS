import { Component } from "react";
import axios from './../../axios-orders'
import Order from './../../components/Order/Order'
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from './../../store/actions/index'

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrder(this.props.token, this.props.userId)
    }
    render() {
        console.log(this.props.orders)
        return (
            <div>
                {this.props.orders.map(order => {
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    ></Order>
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (token, userId) => dispatch(actions.fetchOrder(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));