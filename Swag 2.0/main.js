
let b = document.body;
let a = document.querySelector("#audio");
let son = document.querySelector("#son");
let soff = document.querySelector("#soff");

let title = document.querySelector("#title");
let main = document.querySelector("#main");
let cup = document.querySelector("#cup");
let handle = document.querySelector("#handle");
let smoke = document.querySelectorAll(".smoke");
let eyes = document.querySelector("#eyes");
let nose = document.querySelector("#nose");
let shadow = document.querySelector("#shadow");
let legL = document.querySelector("#legl");
let legBottomL = document.querySelector("#legbl");
let shoesL = document.querySelector("#shoesl");
let legB = document.querySelector("#legr");
let legBottomB = document.querySelector("#legbr");
let shoesB = document.querySelector("#shoesr");
/*******************/
/*******************/
let addAnimation = () =>{
    title.classList.toggle('is-title-active')
    main.classList.toggle('is-main-active')
    cup.classList.toggle('is-cup-active')
    handle.classList.toggle('is-handle-active')
    smoke.forEach( s => s.classList.toggle('is-smoke-active'))
    eyes.classList.toggle('is-eyes-active')
    nose.classList.toggle('is-nose-active')
    shadow.classList.toggle('is-shadow-active')

    legL.classList.toggle('is-legl-active')
    legBottomL.classList.toggle('is-legbl-active')
    shoesL.classList.toggle('is-shoesl-active')
    legB.classList.toggle('is-legr-active')
    legBottomB.classList.toggle('is-legbr-active')
    shoesB.classList.toggle('is-shoesr-active')

    son.classList.toggle("s")
    soff.classList.toggle("s")
}
let playAudio = () => {
    addAnimation()
    a.loop = true
    if (a.paused) {
        setTimeout(()=>{
            a.play()
        }, 100)
    }
    else {
        a.pause();
        a.currentTime = 0;
    }

}
/*******************/
b.addEventListener("click", playAudio)
