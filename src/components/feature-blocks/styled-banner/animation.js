import Snap from "snapsvg-cjs";
import BannerSvg from "../../../assets/svg/banners/coding.svg";

const mina = window.mina;
export function animateBanner(DOMRef, isVisible) {
	const element = Snap(DOMRef);
	Snap.load(BannerSvg, function(fragment) {
		if (element && isVisible) {
			let svgIcon = fragment.selectAll("svg");
			svgIcon.attr({ opacity: 0, transform: "t0,100" });
			element.append(fragment);
			svgIcon.animate({ opacity: 1, transform: "t0,0" }, 500, mina.easeinout);
		}
	});
}
