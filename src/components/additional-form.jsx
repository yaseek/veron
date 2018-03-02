import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, getFormValues, Field } from 'redux-form'
import { compose, bindActionCreators } from 'redux'

import { store } from '../data'
import { isLoadingForm } from '../data/login-selector'
import * as loginActions from '../data/login-actions'

import { Loader } from './loader'
import { TextField } from './text-field'

const INPUT_CONTAINER_CLASS = 'SignupForm_input_3G9Ia'
const INPUT_FIELD_CLASS = 'SignupForm_input__item_3p0t7'
const TEXTBOX_CLASS = 'SignupForm_textbox_3hmXB'
const LABEL_CLASS = 'Label_label_1XJRc'
const ERR_MSG_CLASS = 'SignupForm_errorMsg_r_98x'

const BUTTON_CONTAINER_CLASS = 'SignupForm_button_218KF'
const SUBMIT_BUTTON_CLASS = 'SignupForm_button__item_14Ox7 SignupForm_button__itemSelected_2V76f'
const SIGNUP_BUTTON_BG = 'SignupForm_button__background_2zB6n'

const FORM_NAME = 'additionalForm'

const validate = ({ email }) => {
    return {
        email: email
            ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 'Неверно введён e-mail'
            : void 0
    }
}

const handleSubmit = (props) => (e) => {
    e.preventDefault()

    props.doLogin(props.values)
}

const formOptions = {
    form: FORM_NAME,
    propNamespace: 'form',
    validate
}

const mapStateToProps = (state) => ({
    values: getFormValues(FORM_NAME)(state),
    isLoading: isLoadingForm(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators(loginActions, dispatch)

class AdditionalFormCLASS extends Component {
    
    componentDidMount () {
        if (window.grecaptcha) {
            window.grecaptcha.render(this.element)
        }
    }

    refElement = (node) => this.element = node.querySelector('.g-recaptcha')
    

    render () {
        const { props } = this
        const { isLoading } = props

        return (<div ref={this.refElement}>
            {isLoading && <Loader />}
            {!isLoading && <form onSubmit={handleSubmit(props)}>
                <Field
                    type="email"
                    name="email"
                    component={TextField}
                    label="Введите ваш e-mail"
                    placeHolder="you@mail.com"
                />

                <Field
                    type="text"
                    name="refCode"
                    component={TextField}
                    placeHolder="Введите реферальный код"
                />

                <div style={{ display: 'none' }} />

                <div
                    className="g-recaptcha"
                    data-size="compact"
                    data-sitekey="6LewqEkUAAAAAG3To0xoc2PHSvxp6Ov84c-8_cRD"
                >
                </div>

                <div className={BUTTON_CONTAINER_CLASS}>
                    <button
                        className={SUBMIT_BUTTON_CLASS}
                        type="submit"
                        tabIndex="0"
                    >
                        {'ВХОД'}
                    </button>
                    <div className={SIGNUP_BUTTON_BG} />
                </div>
            </form>}
        </div>)
    }
}

export const AdditionalForm = compose(
    reduxForm(formOptions),
    connect(mapStateToProps, mapDispatchToProps)
)(AdditionalFormCLASS)
