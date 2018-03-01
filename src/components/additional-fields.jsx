import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Recaptcha from 'react-recaptcha'

const INPUT_CONTAINER_CLASS = 'SignupForm_input_3G9Ia'
const INPUT_FIELD_CLASS = 'SignupForm_input__item_3p0t7'

export const additionalFields = (props) => {

    return [
        /*(<div className={INPUT_FIELD_CLASS}>
        </div>),*/
        <div className={INPUT_FIELD_CLASS}>
            <Recaptcha
                elementID="TT"
                sitekey="6LewqEkUAAAAAG3To0xoc2PHSvxp6Ov84c-8_cRD"
                render="explicit"
                onloadCallback={() => console.log('DONE')}
            />
        </div>

    ].map((field) => {
        const div = window.document.createElement('div')
        div.className = INPUT_CONTAINER_CLASS
        
        ReactDOM.render(field, div)

        return div    
    })
}

additionalFields.propTypes = {
    some: PropTypes.string
}

additionalFields.defaultProps = {
    some: ''
}
