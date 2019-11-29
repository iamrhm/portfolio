import anime from "animejs";

export const svgAnimation = {
	easing: "easeInOutSine",
	duration: 2000,
	delay: 300,
	strokeDashoffset: [anime.setDashoffset, 0]
};

export const letterAnimation = {
	opacity: [0, 1],
	translateX: ["-4px", "0px"],
	easing: "easeInOutExpo",
	duration: 800,
	delay: (el, i) => 80 + 100 * (i + 1),
};

export const iconAnimation = {
	scale: [0.3, 1],
	opacity: [0, 1],
	easing: "easeInOutExpo",
	duration: 1000,
	delay: (el, i) => (1000 + 320 * (i + 1)) ^ 2
};

export const textAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	loop: false,
	delay: 1300
};
