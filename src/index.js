import { additionalFields, AdditionalForm } from './components'

const marked = new WeakMap()

let count = 0

const nodeInserted = (node) => {

    const { path, relatedNode } = node

    const formContainer = relatedNode.querySelector('.SignupForm_signupForm_3mgQg')

    if (formContainer && !marked.get(formContainer)) {
        marked.set(formContainer, true)

        additionalFields(formContainer)

        count ++

        if (count > 10) {
            window.removeEventListener('DOMNodeInserted', nodeInserted)
        }

    }
}

window.addEventListener('DOMNodeInserted', nodeInserted)
