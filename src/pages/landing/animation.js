import Snap from "snapsvg-cjs";

import landingSvg from "../../assets/svg/landing/landing.svg";

export function animateSVG(svgDiv) {
	let element = Snap(svgDiv);
	Snap.load(landingSvg, function(data) {
		if (element) {
			element.append(data);
		}
	});
}

export const textAnimation = {
	easing: "easeInOutQuad",
	translateY: [40, 0],
	duration: 800,
	loop: false,
	delay: 1000
};