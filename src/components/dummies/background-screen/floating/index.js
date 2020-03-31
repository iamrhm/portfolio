import React from "react";

import {
	VLines,
	OuterVerticalLines,
	InnerVerticalLineContainer,
	ShadowContainer,
	StyledImage,
	ShadowLines
} from "./style";

import Shadow from "../../../../assets/image/shadow.png";

const FloatingScreen = ({
	withShadow = false,
	type = "primary",
	shadowDelay,
	children
}) => {
	return (
		<VLines>
			<OuterVerticalLines type={type} />
			<InnerVerticalLineContainer type={type} />
			{children}
			{withShadow ? <ShadowDisplay delay={shadowDelay} /> : null}
		</VLines>
	);
};

export default FloatingScreen;

const ShadowDisplay = ({ delay }) => {
	return (
		<ShadowLines delay={delay}>
			<StyledImage src={Shadow} alt="shadow-image" />
			<ShadowContainer />
			<StyledImage src={Shadow} alt="shadow-image" />
		</ShadowLines>
	);
};
