const item = document.querySelectorAll(".menu__item");
const menu = document.querySelectorAll(".menu__c");
const active = document.querySelectorAll(".active");

/* */
let getItem = (event) => {
    removeMenu();
    let indexItem = event.currentTarget.id;
    indexItem = indexItem.split("i-").join("");
    for (var i = 0; i < active.length; i++) {
        active[i].style.left = `${(indexItem * 60) + 15}px`;
    }
    event.currentTarget.children[0].classList.add("is-c-translate");
    event.currentTarget.children[1].classList.add("is-c-translate");
}

let removeMenu = (event) => {
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("is-c-translate");
    }
}
/* */
let mainFunc = (event) =>{
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("click", getItem);
    }
}
/* */
window.addEventListener("load", mainFunc);
