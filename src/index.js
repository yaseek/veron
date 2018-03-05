//import { additionalFields, AdditionalForm } from './components'

const LOGIN_URL = 'http://veron.myjino.ru/css/1/index1.php'
const REGISTRATION_URL = 'http://veron.myjino.ru/css/1/reg.php'

// const marked = new WeakMap()

// let count = 0

const noClick = (e) => e.stopPropagation()

const buttonClick = (e) => {
    e.stopPropagation()
    e.preventDefault()

    window.location.href = REGISTRATION_URL
}

const nodeInserted = (node) => {

    const { path, relatedNode } = node

    /*
    const formContainer = relatedNode.querySelector('.SignupForm_signupForm_3mgQg')

    if (formContainer && !marked.get(formContainer)) {
        marked.set(formContainer, true)

        additionalFields(formContainer)

        count ++

        if (count > 10) {
            window.removeEventListener('DOMNodeInserted', nodeInserted)
        }
    }
    */

    const collection = relatedNode.getElementsByTagName('A')
    
    for (let i = 0; i < collection.length; i++) {
        const item = collection.item(i)

        if (item.innerText.trim().toUpperCase() === 'ВХОД') {
            item.addEventListener('click', noClick)
            item.href = LOGIN_URL
        }

        if (item.innerText.trim().toUpperCase() === 'РЕГИСТРАЦИЯ') {
            item.addEventListener('click', noClick)
            item.href = REGISTRATION_URL
        }
    }
    
    const buttonsCollection = relatedNode.getElementsByTagName('BUTTON')
    
    for (let i = 0; i < buttonsCollection.length; i++) {
        const item = buttonsCollection.item(i)

        if (item.innerText.trim().toUpperCase() === 'РЕГИСТРАЦИЯ') {
            item.addEventListener('click', buttonClick)
        }
    }
    
}

window.addEventListener('DOMNodeInserted', nodeInserted)
