let b = document.body;
let a = document.querySelector("#audio");
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

    son.classList.toggle("s")
    soff.classList.toggle("s")
}
/*******************/
b.addEventListener("click", playAudio)
