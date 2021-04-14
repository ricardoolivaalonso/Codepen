const h = document.querySelector("#h");
const b = document.body;
const keyWhite = document.querySelectorAll('.key-w')
const audioSound = document.querySelectorAll('.audio')
const text = document.querySelector('#g')

/*****************/
/*****************/
const base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(20000px)
        rotateX(${ y * 55  + 60}deg)
        rotateZ(${ -x * 360  + 35}deg)
        translateZ(-6vw)
    `;
}

const playPianoFunc = (e) => {
    let kc = event.keyCode;

    if(kc==77){

        b.removeEventListener("pointermove", base);
        window.removeEventListener("keydown", playNoteFunc);
        window.removeEventListener("keyup", pauseNoteFunc);
        h.classList.add('is-main-playing')

        audioSound[15].play()
        text.classList.add('is-text-visible')
        keyWhite.forEach( (k, i) => { k.style.animation = `key-w 500ms ease infinite ${i/10}s` })

        setTimeout(()=>{
            h.classList.remove('is-main-playing')
            b.addEventListener("pointermove", base);
            window.addEventListener("keydown", playNoteFunc);
            window.addEventListener("keyup", pauseNoteFunc);

            audioSound[15].pause()
            audioSound[15].currentTime = 0
            text.classList.remove('is-text-visible')
            keyWhite.forEach( (k, i) => { k.style.animation = `none` })

        }, 8000)

    }
}

const playNoteFunc = (e) => {
    let kc = event.keyCode;
    console.log(kc)
    
    switch (kc) {
        case 81:
            keyWhite[0].classList.add('is-key-down')
            audioSound[0].play()
            break;
        case 87:
            keyWhite[1].classList.add('is-key-down')
            audioSound[1].play()
            break;
        case 69:
            keyWhite[2].classList.add('is-key-down')
            audioSound[2].play()
            break;
        case 82:
            keyWhite[3].classList.add('is-key-down')
            audioSound[3].play()
            break;
        case 84:
            keyWhite[4].classList.add('is-key-down')
            audioSound[4].play()
            break;
        case 89:
            keyWhite[5].classList.add('is-key-down')
            audioSound[5].play()
            break;
        case 85:
            keyWhite[6].classList.add('is-key-down')
            audioSound[6].play()
            break;
        case 73:
            keyWhite[7].classList.add('is-key-down')
            audioSound[7].play()
            break;
        case 79:
            keyWhite[8].classList.add('is-key-down')
            audioSound[8].play()
            break;
        case 80:
            keyWhite[9].classList.add('is-key-down')
            audioSound[9].play()
            break;
        case 65:
            keyWhite[10].classList.add('is-key-down')
            audioSound[10].play()
            break;
        case 83:
            keyWhite[11].classList.add('is-key-down')
            audioSound[11].play()
            break;
        case 68:
            keyWhite[12].classList.add('is-key-down')
            audioSound[12].play()
            break;
        case 70:
            keyWhite[13].classList.add('is-key-down')
            audioSound[13].play()
            break;
        case 71:
            keyWhite[14].classList.add('is-key-down')
            audioSound[14].play()
            break;
        default:
            break;
    }

}
const pauseNoteFunc = (e) => {
    let kc = event.keyCode;
    
    switch (kc) {
        case 81:
            keyWhite[0].classList.remove('is-key-down')
            break;
        case 87:
            keyWhite[1].classList.remove('is-key-down')
            break;
        case 69:
            keyWhite[2].classList.remove('is-key-down')
            break;
        case 82:
            keyWhite[3].classList.remove('is-key-down')
            break;
        case 84:
            keyWhite[4].classList.remove('is-key-down')
            break;
        case 89:
            keyWhite[5].classList.remove('is-key-down')
            break;
        case 85:
            keyWhite[6].classList.remove('is-key-down')
            break;
        case 73:
            keyWhite[7].classList.remove('is-key-down')
            break;
        case 79:
            keyWhite[8].classList.remove('is-key-down')
            break;
        case 80:
            keyWhite[9].classList.remove('is-key-down')
            break;
        case 65:
            keyWhite[10].classList.remove('is-key-down')
            break;
        case 83:
            keyWhite[11].classList.remove('is-key-down')
            break;
        case 68:
            keyWhite[12].classList.remove('is-key-down')
            break;
        case 70:
            keyWhite[13].classList.remove('is-key-down')
            break;
        case 71:
            keyWhite[14].classList.remove('is-key-down')
            break;
        default:
            break;
    }

}
/*****************/
/*****************/
b.addEventListener("pointermove", base);
window.addEventListener("keydown", playNoteFunc);
window.addEventListener("keyup", pauseNoteFunc);
window.addEventListener("keydown", playPianoFunc);

