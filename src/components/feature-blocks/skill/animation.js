import Snap from "snapsvg-cjs";

import reduxIcon from "../../../assets/svg/skills/redux.svg";
import reactIcon from "../../../assets/svg/skills/react.svg";
import nodejsIcon from "../../../assets/svg/skills/nodejs.svg";
import mongodbIcon from "../../../assets/svg/skills/mongodb.svg";
import typescriptIcon from "../../../assets/svg/skills/typescript.svg";
import javascriptIcon from "../../../assets/svg/skills/javascript.svg";
import vuejsIcon from "../../../assets/svg/skills/vuejs.svg";
import htmlIcon from "../../../assets/svg/skills/html.svg";
import cssIcon from "../../../assets/svg/skills/css.svg";
import graphqlIcon from "../../../assets/svg/skills/graphql.svg";

const svgMapper = {
	redux: reduxIcon,
	react: reactIcon,
	nodejs: nodejsIcon,
	mongodb: mongodbIcon,
	typescript: typescriptIcon,
	javascript: javascriptIcon,
	html: htmlIcon,
	css: cssIcon,
	graphql: graphqlIcon,
	vuejs: vuejsIcon
};

const mina = window.mina;

export function addSVG(name, svgRef, isVisible) {
	name = name.toLowerCase();
	let svg =
		svgMapper[name] !== undefined && svgMapper[name] !== null
			? svgMapper[name]
			: svgMapper["javascript"];
	let element = Snap(svgRef);
	Snap.load(svg, function(fragment) {
		if (element && isVisible) {
			let svgIcon = fragment.selectAll("svg");
			svgIcon.attr({ opacity: 0, transform: "t0,100" });
			element.append(fragment);
			svgIcon.animate({ opacity: 1, transform: "t0,0" }, 500, mina.easeinout);
		}
	});
}
