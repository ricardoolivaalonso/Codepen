const m = document.querySelector("#main");
const c = document.querySelector("#cine");
const p = document.querySelector("#play");
const s = document.querySelector("#stop");
const v = document.querySelector("#video");
const ch = document.querySelectorAll(".chairs");

const bd = document.body;
const root = document.documentElement;


let row = 1;
let con = 0;
//------------------

let playMovie = (e) => {

    p.disabled = true;
    c.classList.add("is-full");

    setTimeout( () =>  {

        s.disabled = false;
        v.style.opacity = 1; v.play();
        bd.classList.toggle("is-black");
        root.style.setProperty('--yl', "rgba(239, 240, 218, .45)");
        root.style.setProperty('--yd', "rgba(213, 214, 194, .45)");

    } , 4000);
}

let stopMovie = (e) => {

    s.disabled = true;
    v.style.opacity = 0; v.pause(); v.currentTime = 0;
    bd.classList.toggle("is-black");

    setTimeout( () =>  {

        c.classList.remove(`is-full`);
        p.disabled = false;
        root.style.setProperty('--yl', "#FAFDBA");
        root.style.setProperty('--yd', "#d5d799");

    }, 3000);
}
//----------------------

//------------------
p.addEventListener("click", playMovie);
s.addEventListener("click", stopMovie);
