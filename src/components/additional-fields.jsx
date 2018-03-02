import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from '../data'

import { AdditionalForm } from './additional-form'

export const additionalFields = (element) =>
    ReactDOM.render(
        <Provider store={store}>
            <AdditionalForm />
        </Provider>,
        element
    )
