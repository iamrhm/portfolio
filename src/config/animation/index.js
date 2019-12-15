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
		translateY: "-10px",
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
		height: ["2px", "2px", "100%"],
		delay: 400,
		duration: 600,
		easing: "easeOutExpo"
	},
	riseAnimation: {
		translateY: ["100%", "0%"],
		opacity: [0, 1],
		duration: 300,
		easing: "easeOutExpo"
	},
	menuBackground: [
		{
			opacity: [0, 0.15],
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
		delay: 1600,
		duration: 400,
		easing: "easeInOutQuad"
	},
	middleLine: {
		translateY: "0px",
		rotate: "0deg",
		delay: 1600,
		duration: 400,
		easing: "easeInOutQuad"
	},
	bottomLine: {
		width: ["100%", "16px", "16px"],
		delay: 1600,
		duration: 400,
		easing: "easeInOutQuad"
	},
	slider: {
		height: ["100%", "2%", "2px"],
		delay: 1100,
		duration: 500,
		easing: "linear"
	},
	riseAnimation: {
		translateY: ["0%", "100%"],
		opacity: [1, 0],
		duration: 100,
		easing: "easeInOutQuad"
	},
	menuBackground: {
		translateX: [0, -30],
		opacity: [0.15, 0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 30 * i
	}
};
