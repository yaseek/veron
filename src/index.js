import { additionalFields } from './components'

const action = (type, form) => (e) => {
    e.preventDefault()
    e.stopPropagation()

    console.log('ACTION', type, form && new FormData(form))
}

const nodeInserted = (node) => {

    const { path, relatedNode } = node

    const formContainer = relatedNode.querySelector('.SignupForm_signupForm_3mgQg form')

    if (formContainer) {

        formContainer.addEventListener('submit', action('SUBMIT'))

        const submitButton = formContainer.querySelector('button')
        const submitContainer = formContainer.querySelector('.SignupForm_button_218KF')

        if (submitButton) {
            submitButton.addEventListener('click', action('CLICK', formContainer))
        }


        additionalFields().map((field) => {

            formContainer.insertBefore(field, submitContainer || null)
            
        })

    }
}

window.addEventListener('DOMNodeInserted', nodeInserted)
