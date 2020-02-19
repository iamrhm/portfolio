import React from "react";

import {
	VLines,
	OuterVerticalLines,
	InnerVerticalLineContainer,
	InnerVerticalLines,
	ShadowContainer,
	StyledImage
} from "./style";

import Shadow from "../../../assets/images/shadow.png";

const FloatingScreen = ({ withShadow = false }) => {
	return (
		<VLines>
			<OuterVerticalLines />
			<InnerVerticalLineContainer>
				<InnerVerticalLines />
			</InnerVerticalLineContainer>
			<ShadowContainer withShadow={withShadow}>
				<StyledImage src={Shadow} alt="shadow-image" />
				<StyledImage src={Shadow} alt="shadow-image" />
			</ShadowContainer>
		</VLines>
	);
};

export default FloatingScreen;
