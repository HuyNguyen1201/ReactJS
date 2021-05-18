import Burger from './../../components/Burger/Burger';
import Aux from '../../hoc/ReactAux/ReactAux';
import Modal from './../../components/UI/Modal/Modal';
import OrderedSummary from './../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import axios from './../../axios-orders'
import Spinner from './../../components/UI/Spinner/Spinner'
import withErrorHandler from './../../components/UI/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import { addIngredient, removeIngredient, initIngredients, purchaseInit, setAuthRedirectPath } from './../../store/actions/index'
const { Component } = require("react");

class BurgerBuilder extends Component {
    state = {
        purcharsing: false,
    }

    componentDidMount() {
        console.log(this.props)
        this.props.initIngredient()
    }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        return sum > 0
    }

    addIngredientHandler = (type) => {
        this.props.onIngredientAdded(type)
        this.updatePurchaseState(this.props.ings);
    }
    removeIngredientHandler = (type) => {
        this.props.onIngredientRemoved(type)
        this.updatePurchaseState(this.props.ings);
    }
    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({ purcharsing: true })
        } else {
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }
    purchaseCancelHandler = () => {
        this.setState({ purcharsing: false })
    }
    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
        this.props.onInitPurchase()
    }
    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;

        let burgur = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner></Spinner>
        if (this.props.ings) {
            burgur = (
                <Aux>
                    <Burger ingredients={this.props.ings}></Burger>
                    <BuildControls
                        ingredientsAdded={this.addIngredientHandler}
                        ingredientsRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                    ></BuildControls>
                </Aux>
            );
            orderSummary = <OrderedSummary
                ingredients={this.props.ings}
                purchaseContinueHandler={this.purchaseContinueHandler}
                purchaseCancelHandler={this.purchaseCancelHandler}
                price={this.props.price}
            ></OrderedSummary>
        }
        // if (this.state.loading) {
        //     orderSummary = <Spinner></Spinner>
        // }
        return (
            <Aux>
                <Modal show={this.state.purcharsing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burgur}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
        error: state.burger.error,
        isAuthenticated: state.auth.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(removeIngredient(ingName)),
        initIngredient: () => dispatch(initIngredients()),
        onInitPurchase: () => dispatch(purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));