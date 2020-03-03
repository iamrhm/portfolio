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
	height: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1em 0;
`;

export const StyledText = styled.span`
	font-size: calc(6px + (24 - 6) * ((100vw - 50px) / (1600 - 50)));
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${primaryBackgroundColor};
	font-weight: bold;
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
/* 	
	&:before {
		position: absolute;
		content: "";
		display: inline-block;
		width: 5px;
		height: 5px;
		background: ${primaryBackgroundColor};
		top: 0;
		left: 0;
		transform: translate(-10px, 12px) rotate(45deg);
	}
	&:after {
		position: absolute;
		content: "";
		display: inline-block;
		width: 5px;
		height: 5px;
		background: ${primaryBackgroundColor};
		top: 0;
		right: 0;
		transform: rotate(45deg);
	} */

`;
