gsap.registerPlugin()
const svg = document.querySelector('.svg-icon')
const a = document.querySelector("#audio");
const vw = (size) => window.innerWidth * ( size/100 )
const tl = new TimelineMax()

const rotateSpaceFunc = () => {
    tl.paused(!tl.paused())
    
    a.loop = true
    a.paused ?  a.play() :  a.pause()
}
svg.addEventListener('click',  rotateSpaceFunc)
// ===========================
tl.pause()

tl.staggerTo(".main-rotate", 8, {
    rotation: 360,
    repeat: -1,
    ease: 'none'
})

gsap.to(".wrapper-c1", {
    z: vw(2.25),
    duration: .75,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to(".wrapper-c2", { keyframes:[
    {
        rotationX: 0,
        rotationY: 0,
        repeat: -1,
        yoyo: true,
    },
    {
        rotationX: -3,
        rotationY: 2,
        repeat: -1,
        yoyo: true,
    },
    {
        rotationX: 3,
        rotationY: 0,
        repeat: -1,
        yoyo: true,
    },
    {
        rotationX: -1,
        rotationY: 0,
        repeat: -1,
        yoyo: true,
    }

], ease: "sine" })

gsap.to(".shadows", {
    transform: "scale(.935)",
    opacity: .75,
    duration: .75,
    webkitFilter: `blur(${vw(1)})`,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.to(".light-3, .light-4", {
    height: vw(15),
    y: vw(1),
    duration: .1,
    repeat: -1,
    yoyo: true,
    ease: "linear",
})

gsap.to(".w1 .wave", {
    height: vw(10),
    width: vw(10),
    z: vw(16),
    duration: .5,
    repeat: -1,
    stagger: 0.1,
    delay: .5,
    border: `${vw(.025)}vw solid rgba(255,255,255,0)`,
    ease: "power1",
})

gsap.to(".w2 .wave", {
    height: vw(10),
    width: vw(10),
    z: vw(16),
    duration: .5,
    repeat: -1,
    stagger: 0.1,
    delay: .5,
    border: `${vw(.025)}vw solid rgba(255,255,255,0)`,
    ease: "power1",
})

gsap.to(".e__front-t", {
    opacity: 0,
    repeat: -1,
    duration: 2,
    ease: CustomEase.create("custom", "M0,0,C0.037,0,0.014,0.938,0.05,0.948,0.353,1.03,0.737,-0.058,0.944,-0.004,0.944,-0.004,0.944,-0.004,0.944,-0.004,0.998,0.01,0.959,0.942,1,1"),
})
