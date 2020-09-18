const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(20000px)
        rotateX(${ y * 10  + 75}deg)
        rotateZ(${ -x * 10  + 35}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);
