export function maskProjectSVG(projectFragment) {
	let projectSvg = projectFragment;
	let text = projectSvg.selectAll("text");
	text.attr({
		fill: "#ffff",
		y: window.innerHeight / 4,
		"font-family": `"Uni Sans Bold", sans-serif`,
		"font-weight": "bold",
		"font-size": "calc(48px + (148 - 48) * ((100vw - 300px) / (1600 - 300)))"
	});
	return projectSvg;
}
