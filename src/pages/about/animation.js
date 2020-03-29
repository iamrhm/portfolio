
export function maskAboutMeSVG(aboutMeFragment) {
	let aboutMe = aboutMeFragment;
	let text = aboutMe.selectAll("text");
	text.attr({
		fill: "#ffff",
		y: window.innerHeight / 4,
		"font-family": `"Roboto", sans-serif`,
		"font-weight": "bold",
		"font-size": "calc(48px + (148 - 48) * ((100vw - 300px) / (1600 - 300)))"
	});
	return aboutMe;
}

export const AboutMeLandingAnimation = {
	opacity: [0, 1],
	easing: "linear",
	duration: 800,
	delay: 1200
};

export const blinkAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	delay: 500
};

export const HeaderAnimations = {
	height: ["100%", "50%"],
	easing: "linear",
	duration: 800,
	delay: 500
};
