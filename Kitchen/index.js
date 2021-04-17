const h = document.querySelector("#h")
const b = document.body
const door = document.querySelector("#door")
const hadoor = document.querySelector("#hadoor")
const tablet = document.querySelector("#tablet")
const hac = document.querySelector("#hac")
const a1 = document.querySelector("#a1")
const a2 = document.querySelector("#a2")
const a3 = document.querySelector("#a3")
const a4 = document.querySelector("#a4")
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
        rotateZ(${ -x * 180 + 35}deg)
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
const tabletFunc = () => {
    a3.loop = false;
    playFunc(a3)
}
const hacFunc = () => {
    hac.classList.toggle('is-hac-open')
    playFunc(a4)
}
const playFunc = (au) => {
    au.loop = false;

    if (au.paused) au.play();
    else {
        au.pause();
        au.currentTime = 0;
    }
}
/*****************/
/*****************/






h.addEventListener('mousedown', mouseDownFunc)
b.addEventListener('mouseup', mouseUpFunc)

door.addEventListener("click", doorFunc)
hadoor.addEventListener("click", hadoorFunc)
tablet.addEventListener("click", tabletFunc)
hac.addEventListener("click", hacFunc)
