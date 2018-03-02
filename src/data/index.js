import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form'

import { reducer as login } from './login-reducer'

export const store = createStore(combineReducers({
    form,
    login
}), applyMiddleware(thunk))
