let b = document.body;
let radio = document.querySelector("#radio");
let a = document.querySelector("#audio");

let sfa = document.querySelectorAll(".speaker__front");
let sta = document.querySelectorAll(".speaker__top");
let sba = document.querySelectorAll(".speaker__back");
let sla = document.querySelectorAll(".speaker__left");
let sra = document.querySelectorAll(".speaker__right");

let son = document.querySelector("#son");
let soff = document.querySelector("#soff");


/*******************/
let playAudio = () => {
    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }
    sfa.forEach( f => f.classList.toggle("sfa") );
    sta.forEach( f => f.classList.toggle("sta") );
    sba.forEach( f => f.classList.toggle("sba") );
    sla.forEach( f => f.classList.toggle("sla") );
    sra.forEach( f => f.classList.toggle("sra") );

    radio.classList.toggle("radio-a")

    son.classList.toggle("s")
    soff.classList.toggle("s")
}

/*******************/
b.addEventListener("click", playAudio)
