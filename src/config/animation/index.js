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
	translateY: ["8px", 0],
	duration: 800,
	loop: false,
	delay: 1300
};

export function getHarmonicDelay(
	currentIndex,
	totalGaps,
	deltaTime,
	initialDelay
) {
	if (currentIndex === totalGaps - 1) {
		return deltaTime + initialDelay;
	} else {
		return (totalGaps - currentIndex) * deltaTime + initialDelay;
	}
}

export function getProgressiveDelay(currentIndex, deltaTime, initialDelay = 0) {
	return initialDelay + deltaTime * (currentIndex + 1);
}

export const menuOpen = {
	topLine: {
		rotate: "45deg",
		delay: 400,
		duration: 200,
		easing: "easeOutExpo"
	},
	middleLine: {
		translateY: "-7px",
		rotate: "-45deg",
		delay: 400,
		duration: 200,
		easing: "easeOutExpo"
	},
	bottomLine: {
		width: ["16px", "16px", "100%"],
		delay: 0,
		duration: 400,
		easing: "easeOutExpo"
	},
	slider: {
		height: [
			"1px",
			window.location.hash.substr(1) === "/skill" &&
			window.innerHeight - 62 < 1082 + 58
				? 1200
				: window.location.hash.substr(1) !== "/skill" &&
				  window.innerHeight - 62 < 500 + 58
				? 500
				: window.innerHeight + 58
		],
		delay: 400,
		duration: 600,
		easing: "easeOutExpo"
	},
	riseAnimation: {
		opacity: [0, 1],
		translateY: [-100, 0],
		easing: "easeOutExpo"
	},
	menuBackground: [
		{
			opacity: [0, 1],
			translateX: [40, 0],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 1200,
			delay: (el, i) => 1000 + 30 * i
		}
	]
};

export const menuClose = {
	topLine: {
		rotate: "0",
		delay: 600,
		duration: 400,
		easing: "easeInOutQuad"
	},
	middleLine: {
		translateY: "0px",
		rotate: "0deg",
		delay: 600,
		duration: 400,
		easing: "easeInOutQuad"
	},
	bottomLine: {
		width: ["100%", "16px", "16px"],
		delay: 800,
		duration: 400,
		easing: "easeInOutQuad"
	},
	slider: {
		height: [
			window.location.hash.substr(1) === "/skill" &&
			window.innerHeight - 62 < 1082 + 58
				? 1200
				: window.location.hash.substr(1) !== "/skill" &&
				  window.innerHeight - 62 < 500 + 58
				? 500
				: window.innerHeight + 58,
			"1px"
		],
		delay: 100,
		duration: 500,
		easing: "linear"
	},
	riseAnimation: {},
	menuBackground: {}
};

const DefaultMenuInitial = {
	firstStep: {
		opacity: 0,
		delay: 0,
		duration: 1,
		easing: "easeOutExpo"
	},
	secondStep: {
		opacity: 1,
		delay: 0,
		duration: 1,
		easing: "easeOutExpo"
	}
};
export const menuInitial = {
	topLine: [
		DefaultMenuInitial.firstStep,
		{
			rotate: "0",
			width: 0,
			delay: 100,
			duration: 100,
			easing: "easeInOutQuad"
		},
		DefaultMenuInitial.secondStep,
		{
			width: [0, 22],
			delay: 300,
			duration: 800
		}
	],
	middleLine: [
		DefaultMenuInitial.firstStep,
		{
			translateY: "0px",
			rotate: "0deg",
			width: 0,
			delay: 100,
			duration: 100,
			easing: "easeInOutQuad"
		},
		DefaultMenuInitial.secondStep,
		{
			width: [0, 22],
			delay: 500,
			duration: 800,
			easing: "easeOutExpo"
		}
	],
	bottomLine: [
		DefaultMenuInitial.firstStep,
		{
			width: 0,
			delay: 100,
			duration: 100,
			easing: "easeInOutQuad"
		},
		DefaultMenuInitial.secondStep,
		{
			width: ["0%", "0px", "16px"],
			delay: 200,
			duration: 1000,
			easing: "easeOutExpo"
		}
	],
	slider: [
		DefaultMenuInitial.firstStep,
		{ ...menuClose.slider, delay: 0 },
		DefaultMenuInitial.secondStep
	],
	riseAnimation: {},
	menuBackground: {}
};
