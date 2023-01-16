const b = document.body
const h = document.querySelector("#h")
const unit = 1.75
const audioElement = document.querySelector("#a")
const btnElement = document.querySelector(".button5")
const tapeElement = document.querySelector(".c")
const circleElement = document.querySelectorAll(".circle")[1]
const waveElement = document.querySelector(".waves")
// =================================
const mouseDown = () => b.addEventListener('mousemove', moveFunc)
const mouseUp = () => b.removeEventListener('mousemove', moveFunc)
const moveFunc = (e) => {
    let x = e.pageX / window.innerWidth - 0.5
    let y = e.pageY / window.innerHeight - 0.5

    h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${ y * 20 + 66}deg)
        rotateZ(${ -x * 420 + 40}deg)
        translateZ(${-16 * unit}vmin)
    `
}
const playRadio = () => {
    btnElement.removeEventListener("click", playRadio)
    audioElement.currentTime = 0
    audioElement.play()
    setTimeout(() => waveElement.classList.add('is-wave-playing'), 1100);
    toggleStyles()

}
const stopRadio = () => {
    btnElement.addEventListener("click", playRadio)
    audioElement.pause()
    waveElement.classList.remove('is-wave-playing')
    toggleStyles()
}
const toggleStyles = () => {
    btnElement.classList.toggle('is-button-pressed')
    tapeElement.classList.toggle('is-c-close')
    circleElement.classList.toggle('cr')

}

h.addEventListener('mousedown', mouseDown)
b.addEventListener('mouseup', mouseUp)
btnElement.addEventListener("click", playRadio)
audioElement.addEventListener('ended', stopRadio)
