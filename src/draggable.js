/**注：
 * 1.这里采用在document绑定事件，防止鼠标快速滑动脱离元素不滑动。
 * 
 * ToDo：
 * 1.需要判断传入的dom是用margin定位位置 ，还是top,left .etc定位位置.（这里暂时不做讨论）
 * 2.如何做事件销毁（已做）
 * 3.节流（已做）
 * 4.支持移动端
 */

import { rafThrottle } from './utils/rafThrottle'

// 默认值
const defaultOpt = {
    positionX: 'marginLeft',
    positionY: 'marginTop'
}

class Draggable {
    // 默认从元素的marginleft ,margintop拖动定位，默认值也是方便使用
    constructor(selectors, options = {}) {
        this.validateDOM(selectors, options);
    }

    validateDOM(selectors, options) { // 校验CSS 选择器字符串有效性
        if (!selectors) {
            console.error('选择器字符串为空！');
            return
        }
        const { positionX, positionY, actualDraggableEle } = Object.assign(defaultOpt, options)

        const aimDom = document.querySelector(actualDraggableEle || selectors) // 两个元素判断
        this.dom = aimDom;
        if (aimDom === null) {
            console.error('选择器无效，取不到目标元素！');
            return
        }
        this.draggableEle = document.querySelector(selectors)
        this.draggableEle.style.cursor = 'move'

        const styleDeclaration = window.getComputedStyle(aimDom, null)
        this.mouseClientX = 0;
        this.mouseClientY = 0;
        this.positionX = positionX;
        this.positionY = positionY;

        this.originX = parseFloat(styleDeclaration[this.positionX])
        this.originY = parseFloat(styleDeclaration[this.positionY])
        this.styleDeclaration = styleDeclaration
        
        // dom事件初始入口
        this.mouseDownFun()

    }

    mouseDownFun() {
        document.onmousedown = (e = {}) => { // 箭头函数，确保this为实例对象
            if (e.target === this.draggableEle || this.draggableEle.contains(e.target)) {// 必须有contains的判断
                // 目标元素最初的user-select值保留下
                this.OriginUserSelectValue = this.styleDeclaration['user-select'];
                // 禁止选中
                this.dom.style['user-select'] = 'none';
                this.mouseMoveFun();
                this.mouseUpFun();
                const { clientX, clientY } = e;
                this.mouseClientX = clientX;
                this.mouseClientY = clientY;
                this.originX = parseFloat(this.styleDeclaration[this.positionX]);
                this.originY = parseFloat(this.styleDeclaration[this.positionY]);
            }
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
        document.onmousemove = rafThrottle(handleFunc)
    }

    mouseUpFun() {
        document.onmouseup = (e) => {
            // 目标元素最初的user-select值重新取出
            this.dom.style['user-select'] = this.OriginUserSelectValue;
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}

export default Draggable