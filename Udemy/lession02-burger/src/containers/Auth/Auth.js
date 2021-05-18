import React, { Component } from 'react'
import Input from './../../components/UI/Input/Input'
import Button from './../../components/UI/Button/Button'
import classes from './Auth.module.css'
import * as actions from './../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from './../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router-dom'
import {checkValidity} from './../../shared/utility'

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        isSignup: true
    }
    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath()
        }
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        // check is email
        return isValid;
    }
    inputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.controls
        }
        updatedOrderForm[inputIdentifier] = { ...updatedOrderForm[inputIdentifier], value: event.target.value }
        if (updatedOrderForm[inputIdentifier].validation) {
            updatedOrderForm[inputIdentifier].valid = checkValidity(updatedOrderForm[inputIdentifier].value, updatedOrderForm[inputIdentifier].validation)
        }
        updatedOrderForm[inputIdentifier].touched = true;
        // check form is valid
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ controls: updatedOrderForm, formIsValid: formIsValid })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        })
    }
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>
        }
        let spinnerForm = null
        if (this.props.loading) {
            spinnerForm = <Spinner></Spinner>
        }
        else {
            const formElementsArray = [];
            for (let key in this.state.controls) {
                formElementsArray.push({ id: key, config: this.state.controls[key] })
            }
            const form = formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangeHandler(event, formElement.id)}
                ></Input>
            ))
            spinnerForm = (
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType='Success'>SUBMIT</Button>
                </form>
            )
        }


        return (
            <div className={classes.Auth}>
                {this.props.isAuthenticated ? <Redirect to={this.props.authRedirectPath}></Redirect> : null}
                {errorMessage}
                {spinnerForm}
                <Button
                    btnType="Danger"
                    clicked={this.switchAuthModeHandler}
                > SWITCH TO SIGN {this.state.isSignup ? 'IN' : 'UP'}</Button>
            </div>
        )
    }

}
const maStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burger.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}
export default connect(maStateToProps, mapDispatchToProps)(Auth);