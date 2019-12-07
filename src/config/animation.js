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
	slider: [
		{
			width: "100%",
			delay: 600,
			duration: 200,
			easing: "easeInCirc"
		},
		{
			height: [0, "calc(100% - 42px)"],
			delay: 200,
			duration: 300,
			easing: "easeInCirc"
		}
	],

	topLine: {
		translateY: ["0", "10px"],
		rotate: "-45deg",
		delay: 400,
		duration: 1000
	},

	middleLine: {
		rotate: "45deg",
		delay: 400,
		duration: 1000
	},

	bottomLine: [
		{
			translateY: "6px",
			delay: 300,
			duration: 300,
			easing: "easeInCirc"
		},
		{
			opacity: 0,
			delay: 601,
			duration: 200,
			easing: "easeInCirc"
		}
	]
};

export const menuClose = {
	slider: [
		{
			height: ["calc(100% - 42px)", "70%", 0],
			delay: 200,
			duration: 500,
			easing: "easeOutSine"
		},
		{
			width: ["100%", 0],
			delay: 400,
			duration: 200,
			easing: "easeInCirc"
		}
	],
	
	topLine: {
		translateY: ["10px", "0px"],
		rotate: 0,
		delay: 700
	},
	middleLine: {
		rotate: 0,
		delay: 700
	},

	bottomLine: [
		{
			opacity: 1,
			delay: 700,
			duration: 100,
			easing: "easeInCirc"
		},
		{
			translateY: "0px",
			delay: 700,
			duration: 100,
			easing: "easeInCirc"
		}
	]
};

const openMenu = {
	topLine: {
		translateY: ["0", "10px"],
		rotate: "-45deg",
		delay: 400,
		duration: 1000
	},
	middleLine: {
		rotate: "45deg",
		delay: 400,
		duration: 1000
	},
	bottomLine: [
		{
			translateY: "6px",
			delay: 300,
			duration: 300,
			easing: "easeInCirc"
		},
		{
			opacity: 0,
			delay: 601,
			duration: 200,
			easing: "easeInCirc"
		}
	]
};
const closeMenu = {
	topLine: {
		translateY: ["10px", "0px"],
		rotate: 0,
		delay: 700
	},
	middleLine: {
		rotate: 0,
		delay: 700
	},
	bottomLine: [
		{
			opacity: 1,
			delay: 700,
			duration: 100,
			easing: "easeInCirc"
		},
		{
			translateY: "0px",
			delay: 700,
			duration: 100,
			easing: "easeInCirc"
		}
	]
};
