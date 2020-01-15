import styled from "styled-components";
import { thirdTextColor, firstTextColor } from "../../config/color-platte";

export const BannerContainer = styled.div`
	position: relative;
	width: 320px;
	height: 80px;

	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (min-width: 990px) {
		width: 486px;
    height: 110px;
	}
`;

export const StyledSvgSmall = styled.svg`
	width: 100%;
	height: 100%;
	text-align: left;

	display: flex;
	justify-content: center;
	* {
		fill: none;
	}
	& :nth-child(7) {
		fill: ${thirdTextColor};
		stroke: none;
	}
	@media screen and (min-width: 990px) {
		display: none;
	}
`;

export const StyledSvgLarge = styled.svg`
	width: 100%;
	height: 100%;
	text-align: left;
	display: none;
	* {
		fill: none;
	}
	& :nth-child(7) {
		fill: ${thirdTextColor};
		stroke: none;
	}

	@media screen and (min-width: 990px) {
		display: flex;
		justify-content: center;
	}
`;

export const StyledPath = styled.path`
	stroke: ${firstTextColor};
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
