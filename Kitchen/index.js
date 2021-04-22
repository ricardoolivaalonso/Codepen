const h = document.querySelector("#h")
const b = document.body
const door = document.querySelector("#door")
const hadoor = document.querySelector("#hadoor")
const hadool = document.querySelector("#hadool")
const tablet = document.querySelector("#tablet")
const heart = document.querySelector("#heart")
const hac = document.querySelector("#hac")
const cup = document.querySelector("#cup")
const a1 = document.querySelector("#a1")
const a2 = document.querySelector("#a2")
const a3 = document.querySelector("#a3")
const a4 = document.querySelector("#a4")
const a5 = document.querySelector("#a5")
/*****************/
/*****************/
const mouseDownFunc = () => b.addEventListener('mousemove', moveFunc);
const mouseUpFunc = () => b.removeEventListener('mousemove', moveFunc)
const moveFunc = (e) => {
    let x = e.pageX / window.innerWidth - 0.5
    let y = e.pageY / window.innerHeight - 0.5

    h.style.transform = `
        perspective(30000px)
        rotateX(${ y * 20 + 65}deg)
        rotateZ(${ -x * 360 + 35}deg)
        translateZ(-10vw)
    `;
};
const doorFunc = () => {
    door.classList.toggle('is-door-open')
    playFunc(a1)
}
const hadoorFunc = () => {
    hadoor.classList.toggle('is-hadoor-open')
    playFunc(a2)
}
const hadoolFunc = () => {
    hadool.classList.toggle('is-hadool-open')
    playFunc(a2)
}
const tabletFunc = () => {
    heart.classList.add('is-heart-visible')
    a3.loop = false;
    playFunc(a3)

    setTimeout(()=>{
        heart.classList.remove('is-heart-visible')
    },1001)
}
const cupFunc = () => playFunc(a5)
const hacFunc = () => {
    hac.classList.toggle('is-hac-open')
    playFunc(a4)
}
const playFunc = (au) => {
    au.loop = false;
    au.pause()
    au.currentTime = 0
    au.play()
}
/*****************/
/*****************/
h.addEventListener('mousedown', mouseDownFunc)
b.addEventListener('mouseup', mouseUpFunc)

door.addEventListener("click", doorFunc)
hadoor.addEventListener("click", hadoorFunc)
hadool.addEventListener("click", hadoolFunc)
tablet.addEventListener("click", tabletFunc)
hac.addEventListener("click", hacFunc)
cup.addEventListener("click", cupFunc)
