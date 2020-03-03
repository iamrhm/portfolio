import Snap from "snapsvg-cjs";

import timelineSvg from "../../assets/svg/timeline/timeline.svg";

export function animateSVG(svgDiv) {
	let element = Snap(svgDiv);
	Snap.load(timelineSvg, function(data) {
		if (element) {
			element.append(data);
		}
	});
}
