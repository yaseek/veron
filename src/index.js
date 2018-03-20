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
    "Игорь Харитонов": "1234",
    "Андрей Бабкин": "1234",
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
        console.log('CCC', node, fbId)
        node.innerHTML = `<span>${contactName}</span>
            <a
                class="icon_facebook"
                href="https://www.facebook.com/${fbId}"
                target="_blank"
            >
                <img src="/img/facebook.svg" />
            </a>`;
        marked.set(node, true)
    }
}

const languages = [
    {
        id: 'ru',
        title: 'Русский'
    },
    {
        id: 'en',
        title: 'Английский'
    }
]

const DEFAULT_LANGUAGE = 'Русский'

const insertDropdown = (node, className) => {

    const state = { show: false }

    const renderDrop = (node, state) => {
        const show = state.show ? 'show' : '';
        node.innerHTML = `<span class="dropdown ${className} ${show}">
          <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="${state.show}">
            ${DEFAULT_LANGUAGE}
          </a>
          <div class="dropdown-menu ${show}" aria-labelledby="dropdownMenuButton">
            ${languages.map((lang) => `<a class="dropdown-item" href="/${lang.id}">${lang.title}</a>`).join('')}
          </div>
        </span>`

        const toggle = node.querySelector('.dropdown-toggle')

        toggle && toggle.addEventListener('click', (e) => {
            e.stopPropagation()
            state.show = !state.show
            renderDrop(node, state)
        })
    }

    renderDrop(node, state)

    document.addEventListener('click', () => renderDrop(node, { show: false }))
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

    

    const founders = relatedNode.querySelectorAll('.AboutUs_founders__heading_1fjX9')

    if (founders && founders.length) {
        for (const contact of founders.values()) {
            renderContact(contact, contact.innerHTML)
        }
    }

    const contacts = relatedNode.querySelectorAll('.AboutUs_staff__heading_1TiRm')

    if (contacts && contacts.length) {
        for (const contact of contacts.values()) {
            renderContact(contact, contact.innerHTML)
        }
    }

    /*------------------- LANGUAGE DROPDOWN -------------------------*/

    [
        {
            selector: 'ul.Navigation_list_1YCWP',
            li: 'Navigation_item_2Qso8',
            className: 'Navigation_link_jf46m'
        },
        {
            selector: 'ul.MobileNavigation_list_1E9Ed',
            li: 'MobileNavigation_item_1efMj',
            className: 'MobileNavigation_link_2tgZ3'
        }
    ].map(({ selector, li, className }) => {
        const cont = relatedNode.querySelector(selector)

        if (cont && !marked.get(cont)) {
            const span = document.createElement('li')
            span.className = li
            span.style.position = 'relative'
            span.style.zIndex = '10'
            cont.insertBefore(span, cont.children.item(0))

            insertDropdown(span, className) 

            marked.set(cont, true)
        }
    })
}

window.addEventListener('DOMNodeInserted', nodeInserted)
