const h = document.querySelector("#h")
const b = document.body
const unit = 1.75
/*****************/
const mouseDownFunc = () => b.addEventListener('mousemove', moveFunc)
const mouseUpFunc = () => b.removeEventListener('mousemove', moveFunc)
const moveFunc = (e) => {
    let x = e.pageX / window.innerWidth - 0.5
    let y = e.pageY / window.innerHeight - 0.5


    h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${ y * 30 + 66}deg)
        rotateZ(${ -x * 420 + 40}deg)
        translateZ(${-14 * unit}vmin)
    `
}
/*****************/
h.addEventListener('mousedown', mouseDownFunc)
b.addEventListener('mouseup', mouseUpFunc)
