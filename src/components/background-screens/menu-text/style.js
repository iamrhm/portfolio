import styled from "styled-components";

import { DarkTextColor } from "../../../config/color-platte";

export const BackgroundScreen = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BackgroundWrapper = styled.div`
	height: 180px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	top: 0;
	transform: translate(0%, -8%);
	min-width: 320px;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		top: 0;
		transform: translate(2%, -5%);
	}
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		top: 0;
		transform: translate(2%, -8%);
	}
	* {
		font-family: "Bungee Shade", sans-serif;
	}
`;

export const StyledTextSpan = styled.span`
	color: ${DarkTextColor};
	opacity: 0;
	margin: 0 1%;
	font-weight: bold;
	font-size: 90px;

	/* Laptop Screen */
	@media screen and (min-width: 834px) {
		font-size: 184px;
		font-weight: bold;
	}
	/* Special Case */
	@media only screen and (max-width: 833px) and (min-width: 720px) {
		font-size: 164px;
	}
	/* Special Case */
	@media only screen and (max-width: 719px) and (min-width: 620px) {
		font-size: 140px;
	}
	@media only screen and (max-width: 620px) and (min-width: 516px) {
		font-size: 112px;
	}
	@media only screen and (max-width: 320px) {
		font-size: 94px;
	}
`;
