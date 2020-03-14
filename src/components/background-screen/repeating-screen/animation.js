import Snap from "snapsvg-cjs";
import stripeLineBg from "../../../assets/svg/repeating-svg/stripe-lines.svg";

const mina = window.mina;

export function animateSVG(svgDiv, svgLayer, getMaskLayer) {
	if (svgDiv && svgLayer && getMaskLayer) {
		const element = Snap(svgDiv);
		Snap.load(stripeLineBg, function(repeatingFragment) {
			if (element) {
				let moveRect = repeatingFragment.selectAll(".move_rect");
				moveRect.attr({ width: "0%" });
				Snap.load(svgLayer, function(svgFragment) {
					const maskLayer = getMaskLayer(svgFragment);
					repeatingFragment.select("#maskContainer").attr({ mask: maskLayer });
					element.append(repeatingFragment);
					//To Simulate Delay
					setTimeout(() => {
						moveRect.animate({ width: "100%" }, 6000, mina.easeinout);
					}, 1000);
				});
			}
		});
	}
}
