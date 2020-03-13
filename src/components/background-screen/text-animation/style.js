import styled from "styled-components";

import { primaryBackgroundColor } from "../../../config/style";

export const DisplayTextContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	@media only screen and (min-device-width: 767px) {
		width: 100%;
	}
`;

export const StyledAnimatePara = styled.div`
	width: 100%;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1em 0;
	@media only screen and (min-device-width: 767px) {
		height: 42px;
	}
`;

export const StyledText = styled.span`
	font-size: calc(6px + (24 - 6) * ((100vw - 50px) / (1600 - 50)));
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${primaryBackgroundColor};

	font-family: "Lato", sans-serif;
`;

export const StyledLine = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	height: 1px;
	width: 100%;
	background-color: ${primaryBackgroundColor};
	transform-origin: 50% 0;
`;
