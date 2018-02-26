import React from 'react'
import PropTypes from 'prop-types'

export const additionalFields = (props) => (
    <div>{'ADDITIONAL FIELDS'}</div>
)

additionalFields.propTypes = {
    some: PropTypes.string
}

additionalFields.defaultProps = {
    some: ''
}
