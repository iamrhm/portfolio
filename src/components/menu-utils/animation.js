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
	backgroundScreen: {
		height: ["0%", "100%"],
		delay: 300,
		duration: 200,
		easing: "easeOutExpo"
	},
	slider: {
		height: ["62px", window.innerHeight < 640 ? "712px" : window.innerHeight],
		delay: 600,
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
	backgroundScreen: {
		height: ["100%", "0%"],
		delay: 800,
		duration: 200,
		easing: "easeOutExpo"
	},
	slider: {
		height: [window.innerHeight < 480 ? "520px" : window.innerHeight, "62px"],
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
			delay: 300,
			duration: 800,
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

export function delayRoute(route, history, delay) {
	setTimeout(() => {
		history.push(route);
	}, delay);
}
