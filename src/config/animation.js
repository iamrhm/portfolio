import anime from "animejs";

export const svgAnimation = {
	easing: "easeInOutSine",
	duration: 3000,
	delay: 600,
	strokeDashoffset: [anime.setDashoffset, 0]
};

export const letterAnimation = {
	opacity: [0, 1],
	translateY: ["-4px", "0px"],
	easing: "easeInOutExpo",
	duration: 1000,
	delay: (el, i) => 1000 + 40 * (i + 1)
};

export const iconAnimation = {
	scale: [0.3, 1],
	opacity: [0, 1],
	easing: "easeInOutExpo",
	duration: 1000,
	delay: (el, i) => (1900 + 320 * (i + 1)) ^ 2
};

export const textAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	loop: false,
	delay: 1300
};
