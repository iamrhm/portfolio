import Snap from "snapsvg-cjs";

import landingSvg from "../../assets/landing-logo.svg";

export function animateSVG(svgDiv) {
	let element = Snap(svgDiv);
	Snap.load(landingSvg, function(data) {
		if (element) {
			element.append(data);
		}
	});
}
