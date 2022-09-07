class Draggable {
    constructor(dom) {
        this.validateDOM(dom);
    }

    validateDOM(dom) { // 校验dom有效性
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
        console.log(styleDeclaration.position);
        console.log(styleDeclaration.left);

        let mouseClientX = null
        trueDom.addEventListener('mousedown', function() {
            console.log(this);
        })

        trueDom.addEventListener('mousemove', function() {
            console.log(this);
        })

    }
}

export { Draggable }