let bd = document.body;
let sunny = document.querySelectorAll(".card__sun");
let m1 = document.querySelectorAll(".card__m--1");
let m2 = document.querySelectorAll(".card__m--2");
let m3 = document.querySelectorAll(".card__m--3");

let getCard = (event) =>{
    let w = window.innerWidth / 2;
    let x = event.clientX;
    let y = event.clientY;

    sunny[0].style.transform = `translateX(${x / 20}px) translateY(${y / 20}px)`;
    sunny[1].style.transform = `translateX(${x / 20}px) translateY(${y / 20}px)`;

    m1[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 50}px) translateY(${y / 55}px)`;
    m1[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 50}px) translateY(${y / 55}px)`;

    m2[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 35}px) translateY(${y / 45}px)`;
    m2[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 35}px) translateY(${y / 45}px)`;

    m3[0].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 35}px) translateY(${y / 35}px)`;
    m3[1].style.transform = `rotateZ(135deg) skew(20deg, 20deg) translateX(${x / 35}px) translateY(${y / 35}px)`;
}

bd.addEventListener("mousemove", getCard);
