import React from 'react'
import { Field } from 'redux-form'

const INPUT_CONTAINER_CLASS = 'SignupForm_input_3G9Ia'
const INPUT_FIELD_CLASS = 'SignupForm_input__item_3p0t7'
const TEXTBOX_CLASS = 'SignupForm_textbox_3hmXB'
const LABEL_CLASS = 'Label_label_1XJRc'
const ERR_MSG_CLASS = 'SignupForm_errorMsg_r_98x'

export const TextField = ({ type, input, placeHolder, label, meta }) => (
    <div>
        {label && <label className={LABEL_CLASS}>
            {label}
        </label>}

        {meta.invalid && <div className={ERR_MSG_CLASS}>
            {meta.error}
        </div>}
        
        <div className={INPUT_CONTAINER_CLASS}>
            <div className={INPUT_FIELD_CLASS}>
                <input
                    {...input}
                    type={type}
                    placeHolder={placeHolder}
                    className={TEXTBOX_CLASS}
                />
            </div>
        </div>
    </div>
)
