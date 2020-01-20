import React from "react";
import styled from "styled-components";

import reduxIcon from "./skills-logo/redux.svg";
import reactIcon from "./skills-logo/react.svg";
import nodejsIcon from "./skills-logo/nodejs.svg";
import mongodbIcon from "./skills-logo/mongodb.svg";
import typescriptIcon from "./skills-logo/typescript.svg";
import javascriptIcon from "./skills-logo/javascript.svg";
import htmlIcon from "./skills-logo/html.svg";
import cssIcon from "./skills-logo/css.svg";
import graphqlIcon from "./skills-logo/graphql.svg";
import LoaderLogo from "./loader-logo";

const StyledIconImage = styled.img`
	width: 24px;
	height: 24px;
	display: block;
`;
const skillsIcon = {
	reduxIcon: reduxIcon,
	reactIcon: reactIcon,
	nodejsIcon: nodejsIcon,
	mongodbIcon: mongodbIcon,
	typescriptIcon: typescriptIcon,
	javascriptIcon: javascriptIcon,
	htmlIcon: htmlIcon,
	cssIcon: cssIcon,
	graphqlIcon: graphqlIcon
};

export function getSkillLogo(iconName) {
	let icon =
		typeof iconName === "string"
			? skillsIcon[`${iconName.toLowerCase()}Icon`]
			: null;
	return <StyledIconImage src={icon} alt={iconName} />;
}

export function getCustomLogo(logoName) {
	if (logoName === "loader") return <LoaderLogo />;
	else return null;
}
