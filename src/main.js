import Draggable from './draggable'

const dom = document.getElementsByClassName('box')

new Draggable(dom, {
    delay: 30
})