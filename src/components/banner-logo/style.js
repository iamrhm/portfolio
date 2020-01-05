import styled from "styled-components";
import { thirdTextColor,firstTextColor } from "../../config/color-platte";

export const BannerContainer = styled.div`
	position: relative;
	width: 320px;
	height: 80px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledSvg = styled.svg`
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
`;

export const StyledPath = styled.path`
	stroke: ${firstTextColor};
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
