import Snap from "snapsvg-cjs";
import repeatingLineBg from "../../../../assets/svg/repeating/repeating.svg";

const mina = window.mina;

export function animateSVG(svgDiv, svgLayer, getMaskLayer) {
	if (svgDiv && svgLayer && getMaskLayer) {
		const element = Snap(svgDiv);
		Snap.load(repeatingLineBg, function(repeatingFragment) {
			if (element) {
				let moveRect = repeatingFragment.selectAll(".move_rect");
				moveRect.attr({ width: "0" });
				Snap.load(svgLayer, function(svgFragment) {
					const maskLayer = getMaskLayer(svgFragment);
					repeatingFragment.select("#maskContainer").attr({ mask: maskLayer });
					element.append(repeatingFragment);
					//To Simulate Delay
					setTimeout(() => {
						moveRect.animate({ width: "20" }, 2000, mina.easeinout);
					}, 1000);
				});
			}
		});
	}
}
