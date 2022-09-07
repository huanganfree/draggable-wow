class Draggable {
    constructor(dom) {
        this.validateDOM(dom);
    }

    validateDOM(dom) { // 校验dom有效性
        console.log(this);
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
        this.mouseClientX = null;
        this.mouseClientY = null;
        this.dom = dom;
        // todo：需要判断传入的dom是用margin定位位置 ，还是top,left etc定位位置.
        this.left = parseFloat(styleDeclaration.left)
        this.top = parseFloat(styleDeclaration.top)
        console.log(this);
    }

    mouseDownFun() {
        this.dom.addEventListener('mousedown', function (e) {
            console.log(this);
        })
    }

    mouseMoveFun() {
        this.dom.addEventListener('mousemove', function (e) {
            console.log(this);
        })
    }
}

export { Draggable }