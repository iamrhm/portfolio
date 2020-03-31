import anime from "animejs";

export const blinkAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	delay: 500
};

export const loaderAnimation = {
	line: {
		easing: "easeInOutSine",
		delay: 500,
		duration: 1000,
		strokeDashoffset: [anime.setDashoffset, 0]
	},
	letter: {
		easing: "easeInOutExpo",
		opacity: [0, 1],
		duration: 1000,
		delay: 1500
	}
};