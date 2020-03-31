const mina = window.mina ? window.mina : {};

export function maskLandingSVG(landingFragment) {
	let landingSVG = landingFragment;
	let paths = landingSVG.selectAll("path");
	paths.forEach(path => {
		const pLength = path.getTotalLength();
		path.attr({
			fill: "#ffff",
			stroke: "black",
			"stroke-dasharray": pLength + " " + pLength,
			"stroke-dashoffset": pLength
		});
	});

	let rect = landingSVG.selectAll("rect");
	const rLength = rect.attr().width;
	rect.attr({
		fill: "#ffff",
		stroke: "#ffff",
		"stroke-dasharray": rLength + " " + rLength,
		"stroke-dashoffset": rLength
	});

	paths.animate({ "stroke-dashoffset": 0 }, 2000, mina.easeinout);
	rect.animate({ "stroke-dashoffset": 0 }, 2000, mina.easeinout);
	return landingSVG;
}
