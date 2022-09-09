/**注：
 * 1.这里采用在document绑定事件，防止鼠标快速滑动脱离元素不滑动。
 * 
 * ToDo：
 * 1.需要判断传入的dom是用margin定位位置 ，还是top,left .etc定位位置.（这里暂时不做讨论）
 * 2.如何做事件销毁（已做）
 * 3.节流
 */

import { throttle } from './utils/throttle'

// 默认值
const defaultOpt = {
    delay: 20,
    positionX: 'marginLeft', 
    positionY: 'marginTop'
}

class Draggable {
    // 默认从元素的marginleft ,margintop拖动定位，默认值也是方便使用
    constructor(dom, options = {}) {
        this.validateDOM(dom, options);
    }

    validateDOM(dom, options) { // 校验dom有效性
        if (!dom) {
            console.error('目标元素为空！');
            return
        }
        if (dom instanceof HTMLCollection) {
            if (!dom.length) {
                console.error('目标元素为空！');
                return
            }
            if (dom.length > 1) {
                console.error('目标元素仅能有一个！');
                return
            }

        }
        const trueDom = dom instanceof HTMLDivElement ? dom : dom[0]
        const styleDeclaration = window.getComputedStyle(trueDom, null)

        const { positionX, positionY, delay } = Object.assign(defaultOpt,  options)
        this.dom = trueDom;
        this.mouseClientX = 0;
        this.mouseClientY = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.delay = delay
        
        this.originX = parseFloat(styleDeclaration[this.positionX])
        this.originY = parseFloat(styleDeclaration[this.positionY])
        this.styleDeclaration = styleDeclaration

        // dom事件初始入口
        this.mouseDownFun()

    }

    mouseDownFun() {
        document.onmousedown = (e = {}) => { // 箭头函数，确保this为实例对象
            this.mouseMoveFun()
            this.mouseUpFun();
            const { clientX, clientY } = e
            this.mouseClientX = clientX
            this.mouseClientY = clientY
            this.originX = parseFloat(this.styleDeclaration[this.positionX])
            this.originY = parseFloat(this.styleDeclaration[this.positionY])
        }
    }

    mouseMoveFun() {
        const self = this
        const handleFunc = (e = {}) => {
            const { clientX, clientY } = e
            const computeX = clientX - self.mouseClientX + self.originX
            const computeY = clientY - self.mouseClientY + self.originY
            self.dom.style[self.positionX] = computeX + 'px'
            self.dom.style[self.positionY] = computeY + 'px'
        }
        document.onmousemove = throttle(handleFunc, this.delay)
    }

    mouseUpFun() {
        document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}

export  {Draggable} 