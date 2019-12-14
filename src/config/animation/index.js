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

export const menuOpen = {
	slider: {
		height: ["2px", "2px", "100%"],
		delay: 605,
		duration: 600,
		easing: "easeInOutQuad"
	},
	topLine: {
		rotate: "45deg",
		delay: 400,
		duration: 1000
	},
	middleLine: {
		translateY: "-10px",
		rotate: "-45deg",
		delay: 400,
		duration: 1000
	},
	bottomLine: {
		width: ["16px", "16px", "100%"],
		delay: 0,
		duration: 600,
		easing: "easeInOutQuad"
	}
};

export const menuClose = {
	slider: {
		height: ["100%", "2px", "2px"],
		delay: 0,
		duration: 600,
		easing: "easeInOutQuad"
	},
	topLine: {
		rotate: "0",
		delay: 400,
		duration: 1000
	},
	middleLine: {
		translateY: "0px",
		rotate: "0deg",
		delay: 400,
		duration: 1000
	},
	bottomLine: {
		width: ["100%", "16px", "16px"],
		delay: 605,
		duration: 300,
		easing: "easeInOutQuad"
	}
};
