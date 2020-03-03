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

const FloatingScreen = ({ withShadow = false, type = "primary" }) => {
	return (
		<VLines>
			<OuterVerticalLines type={type} />
			<InnerVerticalLineContainer type={type} />
			{withShadow ? <ShadowDisplay /> : null}
		</VLines>
	);
};

export default FloatingScreen;

const ShadowDisplay = () => {
	return (
		<ShadowLines>
			<StyledImage src={Shadow} alt="shadow-image" />
			<ShadowContainer />
			<StyledImage src={Shadow} alt="shadow-image" />
		</ShadowLines>
	);
};
