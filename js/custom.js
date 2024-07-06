var tl = gsap.timeline({
    repeat: -1
});
tl
.to(".img-container" ,{
    width: "100%",
    ease: Expo.easeInOut,
    duration:2,
    stagger: 2,
}, "sync")

.to(".text h2", {
    top:"0",
    ease: Expo.easeInOut,
    duration:2,
    stagger: 2,
},  "sync")

.to(".text h2", {
    delay:"2",
    top:"-100%",
    ease: Expo.easeInOut,
    duration:1.5,
    stagger: 2,

},  "sync")




