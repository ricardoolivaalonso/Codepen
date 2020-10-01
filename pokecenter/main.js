const pokecenter = document.querySelector("#pokecenter");
const colaT = document.querySelectorAll(".cola-t");
const cola = document.querySelector("#cola");
const orejas = document.querySelector("#orejas");
const orejaL = document.querySelector("#oreja-l");
const orejaR = document.querySelector("#oreja-r");
const onda = document.querySelector("#onda");
const a = document.querySelector("#audio");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    pokecenter.style.transform = `
        perspective(20000px)
        rotateX(${ y * 10  + 66}deg)
        rotateZ(${ -x * 10  + 35}deg)
        translateZ(-8vw)
    `;
}

let picaFun = (e) => {
    pokecenter.classList.add("ani-pokecenter");
    orejas.classList.add("ani-orejas");
    orejaL.classList.add("ani-oreja-l");
    cola.classList.add("is-hidden");
    orejaR.classList.add("ani-oreja-r");
    onda.classList.add("ani-onda");
    b.removeEventListener("pointermove", base);

    a.loop = false;
    if (a.paused) a.play();

    setTimeout( () =>  {
        pokecenter.classList.remove("ani-pokecenter");
        cola.classList.remove("is-hidden");
        orejas.classList.remove("ani-orejas");
        orejaL.classList.remove("ani-oreja-l");
        orejaR.classList.remove("ani-oreja-r");
        onda.classList.remove("ani-onda");
        b.addEventListener("pointermove", base);

        a.pause();
        a.currentTime = 0;
    } , 6000);
}

b.addEventListener("pointermove", base);
colaT.forEach( c => c.addEventListener('click', picaFun) );
