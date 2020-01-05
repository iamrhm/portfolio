import React from "react";
import { Icon } from "@iconify/react";
import reduxIcon from "@iconify/icons-logos/redux";
import reactIcon from "@iconify/icons-logos/react";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon"; 
import mongodbIcon from "@iconify/icons-whh/mongodb";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import javascriptIcon from "@iconify/icons-logos/javascript";
import htmlIcon from "@iconify/icons-logos/html-5";
import cssIcon from "@iconify/icons-logos/css-3";

const iconPack = {
	reduxIcon: reduxIcon,
	reactIcon: reactIcon,
	nodejsIcon: nodejsIcon,
	mongodbIcon: mongodbIcon,
	typescriptIcon: typescriptIcon,
	javascriptIcon: javascriptIcon,
	htmlIcon: htmlIcon,
	htmlIcon: htmlIcon,
	cssIcon: cssIcon
};
export function getLogo(iconName) {
	let icon =
		typeof iconName === "string" ? `${iconName.toLowerCase()}Icon` : null;
	return <Icon icon={iconPack[`${icon}`]} />;
}