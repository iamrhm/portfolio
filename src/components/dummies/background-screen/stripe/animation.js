import Snap from "snapsvg-cjs";
import stripeLineBg from "../../../../assets/svg/stripe/stripe.svg";

const mina = window.mina;

export function animateSVG(svgDiv, svgLayer, getMaskLayer) {
	if (svgDiv && svgLayer && getMaskLayer) {
		const element = Snap(svgDiv);
		Snap.load(stripeLineBg, function(repeatingFragment) {
			if (element) {
				Snap.load(svgLayer, function(svgFragment) {
					const maskLayer = getMaskLayer(svgFragment);
					repeatingFragment.select("#maskContainer").attr({ mask: maskLayer });
					element.append(repeatingFragment);
				});
			}
		});
	}
}
