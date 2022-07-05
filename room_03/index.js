const b = document.body
const h = document.querySelector("#h")
const a = document.querySelector("#a");
const unit = 1.7
const bioshock = document.querySelector('#bioshock')
const img = document.querySelector('#img')
const video = document.querySelector('#video')
const tv = document.querySelector('#screen')

const playFunc = () => {
    b.removeEventListener("pointermove", base)
    bioshock.removeEventListener("click", playFunc)

    img.classList.add('is-element-hidden')
    video.classList.remove('is-element-hidden')
    h.classList.add('is-main-active')

    video.load()
    a.currentTime = 0
    a.play()
}
const stopFunc = () => {
    b.addEventListener("pointermove", base)
    bioshock.addEventListener("click", playFunc)

    img.classList.remove('is-element-hidden')
    video.classList.add('is-element-hidden')
    h.classList.remove('is-main-active')

    a.pause()
    a.currentTime = 0
}


const base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5
    var y = e.pageY / window.innerHeight - 0.5
    h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${ y * 3 + 66}deg)
        rotateZ(${ -x * 10 + 35}deg)
        translateZ(${-14 * unit}vmin)
    `;
}

b.addEventListener("pointermove", base)
bioshock.addEventListener("click", playFunc)
tv.addEventListener("click", stopFunc)









// const mouseDownFunc = () => b.addEventListener('mousemove', moveFunc)
// const mouseUpFunc = () => b.removeEventListener('mousemove', moveFunc)
// const moveFunc = (e) => {
//     let x = e.pageX / window.innerWidth - 0.5
//     let y = e.pageY / window.innerHeight - 0.5
//
//     h.style.transform = `
//         perspective(${400 * unit}vmin)
//         rotateX(${ y * 90 + 66}deg)
//         rotateZ(${ -x * 420 + 40}deg)
//         translateZ(${-14 * unit}vmin)
//     `
// }
// h.addEventListener('mousedown', mouseDownFunc)
// b.addEventListener('mouseup', mouseUpFunc)
