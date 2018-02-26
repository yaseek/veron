import ReactDOM from 'react-dom'

import { additionalFields } from './components'

const nodeInserted = ({ path, relatedNode }) => {

    if (relatedNode.id === 'root') {
        ReactDOM.render(additionalFields(), relatedNode)
    }
}

window.addEventListener('DOMNodeInserted', nodeInserted)
