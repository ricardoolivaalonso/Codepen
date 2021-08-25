
const h = document.querySelector("#h")
const b = document.body
/*****************/
/*****************/
const mouseDownFunc = () => b.addEventListener('mousemove', moveFunc);
const mouseUpFunc = () => b.removeEventListener('mousemove', moveFunc)
const moveFunc = (e) => {
    let x = e.pageX / window.innerWidth - 0.5
    let y = e.pageY / window.innerHeight - 0.5

    h.style.transform = `
        perspective(30000px)
        scale(1.2)
        rotateX(${ y * 20 + 55}deg)
        rotateZ(${ -x * 20 + 35}deg)
        translateZ(-10vmin)
    `;
};

/*****************/
/*****************/
h.addEventListener('mousedown', mouseDownFunc)
b.addEventListener('mouseup', mouseUpFunc)
