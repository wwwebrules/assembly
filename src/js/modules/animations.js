import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {BASE_DURATION, WR} from "../const.js";

gsap.registerPlugin(ScrollTrigger);
// const baseTl = gsap.timeline()
// baseTl.fromTo('.wrapper', {
//     opacity: 0,
//     duration: .5,
// }, {
//     opacity: 1
// })
// baseTl.fromTo('.page', {
//     scrollTrigger: {
//         trigger: '.page'
//     },
//     opacity: 0,
//     duration: .5,
// }, {
//     opacity: 1
// })


// export const scrollAnimation = () => {
    // gsap.utils.toArray('.scroll-animation').forEach((el, index) => {

        // let scrollAnimationTl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: el,
        //         start: "30px bottom",
        //         toggleActions: "play none none none",
        //         // markers: true,
        //         // scrub: true
        //     },
        // })
        // scrollAnimationTl
        //     .fromTo(el, {opacity: 0}, {
        //         opacity: 1,
        //         duration: .7,
        //         delay: 0,
        //     })
    // })
// }