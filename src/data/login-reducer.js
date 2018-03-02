import { Map } from 'immutable'

const initialState = Map({
    isLoading: false
})

export const reducer = ( state = initialState, action) => state
