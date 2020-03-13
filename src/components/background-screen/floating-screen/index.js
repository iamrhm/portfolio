import React from "react";

import {
	VLines,
	OuterVerticalLines,
	InnerVerticalLineContainer,
	ShadowContainer,
	StyledImage,
	ShadowLines
} from "./style";

import Shadow from "../../../assets/image/shadow.png";

const FloatingScreen = ({
	withShadow = false,
	type = "primary",
	line = {},
	shadow = {},
	children
}) => {
	return (
		<VLines>
			<OuterVerticalLines
				type={type}
				duration={line.duration}
				delay={line.delay}
			/>
			<InnerVerticalLineContainer
				type={type}
				duration={line.duration}
				delay={line.delay}
			/>
			{children}
			{withShadow ? <ShadowDisplay {...shadow} /> : null}
		</VLines>
	);
};

export default FloatingScreen;

const ShadowDisplay = ({ duration, delay }) => {
	return (
		<ShadowLines>
			<StyledImage
				src={Shadow}
				alt="shadow-image"
				duration={duration}
				delay={delay}
			/>
			<ShadowContainer />
			<StyledImage
				src={Shadow}
				alt="shadow-image"
				duration={duration}
				delay={delay}
			/>
		</ShadowLines>
	);
};
