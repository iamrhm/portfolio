import Snap from "snapsvg-cjs";
import timelineSvg from "../../../assets/svg/timeline/timeline-updated.svg";
const mina = window.mina;
function getInitialAttr(elm) {
	let resultArray = [];
	if (!elm.length) {
		resultArray.push(elm.attr());
	} else {
		elm.forEach(frag => {
			resultArray.push(frag.attr());
		});
	}
	return resultArray;
}
function initialSetup(arrayList) {
	arrayList.forEach(data => {
		data.initialAttr = getInitialAttr(data.elm);
		data.init();
	});
}

export function animateSVG(svgDiv, isVisible) {
	let element = Snap(svgDiv);
	Snap.load(timelineSvg, function(fragment) {
		if (element && isVisible) {
			let baseLine = {
				elm: fragment.select(".timeline-line"),
				initialAttr: [],
				init: function() {
					let element = fragment.select(".timeline-line");
					let { x1 } = element.attr();
					element.attr({ x2: x1 });
				}
			};
			let yearLines = {
				elm: fragment.selectAll(".year-lines"),
				initialAttr: [],
				init: function() {
					let elms = fragment.selectAll(".year-lines");
					elms.forEach(elm => {
						let { y1 } = elm.attr();
						elm.attr({ y2: y1 });
					});
				}
			};
			let yearsValues = {
				elm: fragment.selectAll(".year-value"),
				initialAttr: [],
				init: function() {
					let elms = fragment.selectAll(".year-value");
					elms.forEach(elm => {
						elm.attr({ opacity: 0 });
					});
				}
			};
			let timeSlots = {
				elm: fragment.selectAll(".time-slots"),
				initialAttr: [],
				init: function() {
					let elms = fragment.selectAll(".time-slots");
					elms.forEach(elm => {
						elm.attr({ width: 0 });
					});
				}
			};
			let textInfo = {
				elm: fragment.selectAll(".text-info"),
				initialAttr: [],
				init: function() {
					let elms = fragment.selectAll(".text-info");
					elms.forEach(elm => {
						elm.attr({ opacity: 0 });
					});
				}
			};
			let shadedArea = {
				elm: fragment.select("#shaded-area"),
				initialAttr: [],
				init: function() {
					let elm = fragment.select("#shaded-area");
					elm.attr({ opacity: 0 });
				}
			};
			const animateBaseLine = function() {
				let { elm, initialAttr } = baseLine;
				const cb = animateYearLines;
				elm.animate({ x2: initialAttr[0].x2 }, 1000, mina.linear, cb);
			};
			const animateYearLines = function() {
				let { elm, initialAttr } = yearLines;
				const cb = animateYearsValue;
				elm.forEach((line, i) => {
					if (i === elm.length - 1)
						line.animate({ y2: initialAttr[i].y2 }, 500, mina.linear, cb);
					else line.animate({ y2: initialAttr[i].y2 }, 500, mina.linear);
				});
			};
			const animateYearsValue = function() {
				let { elm } = yearsValues;
				const cb = animateTimeSlots;
				elm.forEach((year, i) => {
					if (i === elm.length - 1)
						year.animate({ opacity: 1 }, 500, mina.linear, cb);
					else year.animate({ opacity: 1 }, 500, mina.linear, cb);
				});
			};
			const animateTimeSlots = function() {
				let { elm, initialAttr } = timeSlots;
				const cb = animateTextInfo;
				elm.forEach((slot, i) => {
					if (i === elm.length - 1) {
						slot.animate(
							{ width: initialAttr[i].width },
							1000,
							mina.linear,
							cb
						);
					} else {
						slot.animate({ width: initialAttr[i].width }, 1000, mina.linear);
					}
				});
			};
			const animateTextInfo = function() {
				let { elm } = textInfo;
				const cb = animateShadedArea;
				elm.forEach((text, i) => {
					if (i === elm.length - 1)
						text.animate({ opacity: 1 }, 500, mina.linear, cb);
					else text.animate({ opacity: 1 }, 500, mina.linear);
				});
			};
			const animateShadedArea = function() {
				let { elm } = shadedArea;
				elm.animate({ opacity: 1 }, 500, mina.linear);
			};
			initialSetup([
				baseLine,
				yearLines,
				yearsValues,
				timeSlots,
				textInfo,
				shadedArea
			]);
			element.append(fragment);
			animateBaseLine();
		}
	});
}
