import Snap from "snapsvg-cjs";
const mina = window.mina;

export const loadIcon = (iconRef, icon, index) => {
	const element = Snap(iconRef);
	const delay = 2500 + 500 * (index + 1);
	if (element) {
		Snap.load(icon, function(fragment) {
			fragment.selectAll(".social-icon").attr({
				opacity: 0.3,
				transform: "s0"
			});
			element.append(fragment);
			setTimeout(() => {
				Snap.animate(
					0.3,
					1,
					function(value) {
						fragment
							.selectAll(".social-icon")
							.attr({ transform: "s" + value, opacity: value });
					},
					200,
					mina.easein
				);
			}, delay);
		});
	}
};
