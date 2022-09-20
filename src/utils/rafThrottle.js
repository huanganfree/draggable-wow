// requestAnimationFrame节流
const rafThrottle = function (func) {
    let locked = false;
    return function () {
        if (locked) return;
        locked = true
        window.requestAnimationFrame(() => {
            func.apply(this, arguments);
            locked = false;
        })
    };
};

export { rafThrottle }