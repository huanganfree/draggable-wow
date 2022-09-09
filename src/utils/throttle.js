 // 节流
const throttle = function (func, delay) {
    let timer = null;
    return function () {
        const context = this; // 触发事件的dom元素
        const args = arguments;
        if (timer) return;
        timer = setTimeout(() => {
            func.apply(context, args);
            timer = null;
        }, delay);
    };
};

export { throttle }