import ReactDOM from 'react-dom'

import { additionalFields } from './components'

const nodeInserted = (node) => {

    const { path, relatedNode } = node

    console.log('INSERTED', node)

    const formContainer = relatedNode.querySelector('.SignupForm_signupForm_3mgQg')

    if (formContainer) {
        const div = window.document.createElement('div')
        formContainer.insertBefore(div, null)
        ReactDOM.render(additionalFields(), div)
    }
}

window.addEventListener('DOMNodeInserted', nodeInserted)
