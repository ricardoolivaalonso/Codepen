const unit = 1.75;
const b = document.body;
const h = document.querySelector("#h");
const a = document.querySelector("#a")
const cas = document.querySelector('#cas')
const btn = document.querySelector('.button:nth-of-type(1)')
const tsh = document.querySelector('#tsh')
const lgh = document.querySelector('#lgh')


/*****************/
const mouseDownFunc = () => b.addEventListener("mousemove", moveFunc)
const mouseUpFunc = () => b.removeEventListener("mousemove", moveFunc)
const moveFunc = (e) => {
	let x = e.pageX / window.innerWidth - 0.5;
	let y = e.pageY / window.innerHeight - 0.5;

	h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${y * 30 + 60}deg)
        rotateZ(${-x * 720 + 40}deg)
        translateZ(${-6 * unit}vmin)
    `
}
const playFunc = () => {
    cas.classList.toggle('is-radio-playing')
    tsh.classList.toggle('is-tape-close')
    btn.classList.toggle('is-button-pressed')

    setTimeout(()=>lgh.classList.toggle('is-wave-playing'), 1025)

    a.loop = true;
	if (a.paused) {
		a.play();
	} else {
		a.pause();
		a.currentTime = 0;
	}
}
/*****************/
h.addEventListener("mousedown", mouseDownFunc)
b.addEventListener("mouseup", mouseUpFunc)
btn.addEventListener("click", playFunc)
