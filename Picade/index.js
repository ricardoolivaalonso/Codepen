const b = document.body;
const h = document.querySelector("#h");
const unit = 1.75;

/*****************/
const mouseDownFunc = () => b.addEventListener("mousemove", moveFunc);
const mouseUpFunc = () => b.removeEventListener("mousemove", moveFunc);
const moveFunc = (e) => {
	let x = e.pageX / window.innerWidth - 0.5;
	let y = e.pageY / window.innerHeight - 0.5;

	h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${y * 30 + 70}deg)
        rotateZ(${-x * 720 + 40}deg)
        translateZ(${-17 * unit}vmin)
    `;
}

/*****************/
h.addEventListener("mousedown", mouseDownFunc);
b.addEventListener("mouseup", mouseUpFunc);
