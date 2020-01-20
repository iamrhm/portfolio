import anime from "animejs";

export const svgAnimation = {
	easing: "easeInOutSine",
	duration: 3000,
	delay: 600,
	strokeDashoffset: [anime.setDashoffset, 0]
};

export const R_TEXT_Animation = {
	easing: "easeInBounce",
	opacity: [0, 1],
	duration: 1000,
	delay: 3400
};

export const letterAnimation = {
	scale: [0, 1],
	duration: 1500,
	elasticity: 600,
	delay: (el, i) => 1200 + 45 * (i + 1)
};

export const HEADERAnimation = [
	{
		scale: [0.92, 1],
		opacity: [0, 1],
		easing: "easeOutCubic",
		duration: 800,
		delay: 500
	}
];

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

export const blinkAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	delay: 500
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
		height: ["1px", window.innerHeight < 640 ? "712px" : window.innerHeight],
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
		height: [window.innerHeight < 480 ? "520px" : window.innerHeight, "1px"],
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

export const TexTAnimation = {
	in: {
		duration: 800,
		easing: "easeOutElastic",
		opacity: 1
	},
	out: {
		duration: 800,
		delay: 500,
		easing: "easeOutExpo",
		opacity: 0
	}
};

export const MoveLine = {
	first: {
		opacity: [0.5, 1],
		scaleX: [0, 1],
		easing: "easeInOutExpo",
		delay: 2000,
		duration: 700
	},
	second: {
		duration: 600,
		easing: "easeOutExpo"
	}
};

export function delayRoute(route, history, delay) {
	setTimeout(() => {
		history.push(route);
	}, delay);
}
