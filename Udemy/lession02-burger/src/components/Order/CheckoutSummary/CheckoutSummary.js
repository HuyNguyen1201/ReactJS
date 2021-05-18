import Burger from './../../Burger/Burger'
import Button from './../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{ with: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinue}
            >CONTINUE</Button>
        </div>
    )
}
export default checkoutSummary;