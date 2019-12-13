import styled from "styled-components";
import { firstTextColor } from "../../config/color-platte";

export const BannerContainer = styled.div`
	position: relative;
	width: 234px;
	height: 64px;

	display: flex;
	justify-content: flex-start;
	align-items: flex-end;

	/* Laptop Screen */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		display: flex;
		justify-content: flex-end;
		height: 30%;
		align-items: center;
	}
`;

export const StyledSvg = styled.svg`
	width: 100%;
	height: 100%;
	text-align: left;

	display: flex;
	justify-content: center;
`;

export const StyledPath = styled.path`
	fill: none;
	stroke: ${firstTextColor};
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
