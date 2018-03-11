//import { additionalFields, AdditionalForm } from './components'

const LOGIN_URL = '/vhod.php'
const REGISTRATION_URL = '/reg.php'

const marked = new WeakMap()

// let count = 0

const noClick = (e) => e.stopPropagation()

const buttonClick = (url) => (e) => {
    e.stopPropagation()
    e.preventDefault()

    window.location.href = url
}

const fbIds = {
    "Алиса Погарская": "1234",
    "Michael A. Soares": "1234",
    "Ailien Phan": "1234",
    "Adriana Ramon": "1234",
    "Kyle Rankin": "1234",
    "Robert Rodden": "1234",
    "Pavlo Grozian": "1234",
    "Josh Wright": "1234",
    "Jamie Radice": "1234",
}

const renderContact = (node, contactName) => {
    const fbId = fbIds[contactName]

    if (!marked.get(node) && fbId) {
        node.innerHTML = `<span>${contactName}</span>
            <a class="icon_facebook" href="https://www.facebook.com/${fbId}">
                <img src="/img/facebook.svg" />
            </a>`;
        marked.set(node, true)
    }
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
            item.addEventListener('click', buttonClick(REGISTRATION_URL))
        }

        if (item.innerText.trim().toUpperCase() === 'ВХОД') {
            item.addEventListener('click', buttonClick(LOGIN_URL))
        }
    }
    
    /*---------------- CONTACTS ---------------------------------*/

    const contacts = relatedNode.querySelectorAll('.AboutUs_staff__heading_1TiRm')

    if (contacts && contacts.length) {
        for (const contact of contacts.values()) {
            renderContact(contact, contact.innerHTML)
        }
    }
}

window.addEventListener('DOMNodeInserted', nodeInserted)

