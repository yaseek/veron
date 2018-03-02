import { createSelector } from 'reselect'
import _ from 'lodash'

const getSlice = createSelector((state) => state.login, _.identity)

export const isLoadingForm = createSelector(getSlice, (slice) => slice.get('isLoading', false))
