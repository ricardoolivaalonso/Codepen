var x = document.getElementById("myAudio");
function playAudio() { x.loop = true; x.play(); }
window.addEventListener("load", playAudio)
