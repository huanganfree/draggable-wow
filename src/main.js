// import { Draggable } from '../dist/draggable.min.js'

// import { Draggable } from './draggable'

import { Draggable } from 'draggable-wow'

const dom = document.getElementsByClassName('box')

new Draggable(dom, {
    delay: 10
})