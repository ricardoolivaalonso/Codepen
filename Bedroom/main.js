/*
const h = document.querySelectorAll(".rb");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;

    h.forEach( i => {
        i.style.transform = `
            perspective(10000px)
            rotateX(${ y * 50  + 60}deg)
            rotateZ(${ -x * 50  + 60}deg)
            translateZ(-8vw)
        `;
    });
}

b.addEventListener("pointermove", base);
*/

let bocina = document.querySelector("#bocina");
let bocinaA = document.querySelectorAll(".bocina-a");
let librero = document.querySelector("#librero");
let libreroPuerta = document.querySelector(".librero-r1");
let repisa = document.querySelector("#repisa");
let repisaPuerta = document.querySelector(".repisa-p");
let buro = document.querySelector("#buro");
let a = document.querySelector("#audio");
let a2 = document.querySelector("#audio2");
let a3 = document.querySelector("#audio3");
let a4 = document.querySelector("#audio4");

/*******************/
let radioTocando = () => {
    bocinaA[0].classList.toggle('is-bocina-active')
    bocinaA[1].classList.toggle('is-bocina-active')

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }
}

let libreroAbiero = () => {
    libreroPuerta.classList.toggle('is-librero-open')

    a2.loop = false;

    if (a2.paused) a2.play();
    else {
        a2.pause();
        a2.currentTime = 0;
    }
}
let repisaAbierto = () => {
    repisaPuerta.classList.toggle('is-repisa-open')

    a3.loop = false;

    if (a3.paused) a3.play();
    else {
        a3.pause();
        a3.currentTime = 0;
    }
}
let buroAbierto = () => {

    a4.loop = false;

    if (a4.paused) a4.play();
    else {
        a4.pause();
        a4.currentTime = 0;
    }
}

/*******************/
bocina.addEventListener("click", radioTocando)
librero.addEventListener("click", libreroAbiero)
repisa.addEventListener("click", repisaAbierto)
buro.addEventListener("click", buroAbierto)
