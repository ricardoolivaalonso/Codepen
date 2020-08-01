let b = document.body;
let radio = document.querySelector("#radio");
let shadow= document.querySelector("#shadow");
let buttonCta = document.querySelector("#button-cta");
let cover = document.querySelector("#cover");
let circles = document.querySelector("#circles");

let a = document.querySelector("#audio");
let son = document.querySelector("#son");
let soff = document.querySelector("#soff");


/*******************/
let radioPlaying = () => {
    radio.classList.toggle('is-radio-active')
    shadow.classList.toggle('is-shadow-active')
    buttonCta.classList.toggle('is-button-active')
    cover.classList.toggle('is-cover-active')
    // circles.classList.toggle('is-circle-active')

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }

    son.classList.toggle("s");
    soff.classList.toggle("s");
}

/*******************/
buttonCta.addEventListener("click", radioPlaying)
soff.addEventListener("click", radioPlaying)
son.addEventListener("click", radioPlaying)
