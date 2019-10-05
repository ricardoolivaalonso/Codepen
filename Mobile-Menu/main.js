/* Const */
const menuItem = document.querySelectorAll(".menu__item");
const currentItem = document.querySelector("#current");
const mov = 140;
/* Func */
let getItem = (event) => {
    let x = event.currentTarget.id.slice("-")[0];
    let y = event.currentTarget.id.slice("-")[2];

    currentItem.style.left = `${ x * mov }px`;
    setTimeout( () =>  currentItem.style.top = `${ y * mov }px`, 200 ) ;

}
/* Main */
let mainFunction = (event) => {
    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener("click", getItem);
    }
}

window.addEventListener("load", mainFunction);
