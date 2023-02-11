import { gsap, Power2} from "gsap";
import {isMobile} from '../../assets/js/checkMobile'

const mouseEnterAnim = (event) => {
	const target = event.currentTarget;
	if(target.querySelector("[data-hover-fill]") && !isMobile.any()) {
		gsap.to(target.querySelector("[data-hover-fill]"), .6, {
			startAt: {y: "76%"},
			y: "0%",
			ease: Power2.easeInOut
		});
	}
}

const mouseLeaveAnim = (event) => {
	const target = event.currentTarget;

	if(target.querySelector("[data-hover-fill]") && !isMobile.any()) {
		gsap.to(target.querySelector("[data-hover-fill]"), .6, {
			y: "-76%",
			ease: Power2.easeInOut
		});
	}
}


export {mouseEnterAnim, mouseLeaveAnim}
