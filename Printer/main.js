let b = document.body;
let printer = document.querySelector("#printer");
let shadows = document.querySelector("#shadows");
let paper = document.querySelector("#paper");
let paperShadow = document.querySelector("#paper-shadow");
let text = document.querySelector("#text");
let a = document.querySelector("#audio");



/*******************/
let printerFunction = () => {
    printer.classList.toggle('is-printer-animated')
    shadows.classList.toggle('is-shadows-animated')
    paper.classList.toggle('is-paper-animated')
    paperShadow.classList.toggle('is-paper-shadow-animated')
    text.classList.toggle('is-text-animated')

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }
}

/*******************/
printer.addEventListener("click", printerFunction)
