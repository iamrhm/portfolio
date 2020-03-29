export function maskContactMeSVG(fragment) {
	let elm = fragment;
	let text = elm.selectAll("text");
	text.attr({
		fill: "#ffff",
		stroke: "#fff",
		"font-family": `"Uni Sans Bold", sans-serif`,
		"font-weight": "bold",
		"font-size": "calc(14px + (24 - 14) * ((100vw - 380px) / (1600 - 380)))"
	});
	return elm;
}

export const blinkAnimation = {
	easing: "easeInOutQuad",
	opacity: [0, 1],
	duration: 800,
	delay: 500
};

export const HEADERAnimation = [
	{
		scale: [0.92, 1],
		opacity: [0, 1],
		easing: "easeOutCubic",
		duration: 800,
		delay: 1300
	}
];
