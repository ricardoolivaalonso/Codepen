const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(20000px)
        rotateX(${ y * 10  + 70}deg)
        rotateZ(${ x * 30  + 40}deg)
        translateZ(-10vw)
    `;
}

b.addEventListener("pointermove", base);


/*
https://www.instagram.com/p/Bw8y4LohXws/?igshid=1r2hhcmnssyjq
*/
