let main = document.querySelector("#main");
let swi = document.querySelector("#switch");
let g = document.querySelector("#g");
let button = document.querySelector("#button");
let tap = document.querySelector("#tap");
let led = document.querySelector("#led");
let ledi = document.querySelector("#ledi");
let shadow = document.querySelector("#shadow");


let getSwitch = (event) =>{

    main.classList.toggle("m-night");
    swi.classList.toggle("s-night");

    g.classList.toggle("g-night");
    button.classList.toggle("b-night");
    tap.classList.toggle("t-night");
    led.classList.toggle("l-night");
    ledi.classList.toggle("li-night");
    shadow.classList.toggle("sh-night");
}

swi.addEventListener("click", getSwitch);
