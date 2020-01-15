import styled from "styled-components";
import { firstTextColor } from "../../../config/color-platte";

export const BannerContainer = styled.div`
	position: relative;
	width: 64px;
	height: 64px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledSvg = styled.svg`
	width: 100%;
	height: 100%;
	fill: none;

	& :nth-child(1) {
		fill: ${firstTextColor};
	}
`;

export const StyledPath = styled.path`
	stroke: ${firstTextColor};
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
