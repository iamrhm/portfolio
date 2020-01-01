import styled from "styled-components";

import { DarkTextColor } from "../../../config/color-platte";

export const BackgroundScreen = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 0 6%;
	padding-top: 74px;
`;

export const SVGContainer = styled.div`
	width: 180px;
	height: 300px;
	display: none;
	position: relative;
	@media screen and (min-width: 834px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const AnimateText = styled.p`
	display: block;
	font-size: 16px;
	font-weight: bold;
	color: ${DarkTextColor};
	bottom: 0;
`;

export const StyledAvatorSVG = styled.svg`
	width: 177px;
	height: 234px;
	fill: ${DarkTextColor};
	transform: rotate(2deg);
	opacity: 0.5;
`;
