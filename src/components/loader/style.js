import styled from "styled-components";

import { firstTextColor, primaryBackgroundColor } from "../../config/style";

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${primaryBackgroundColor};
`;

export const StyledText = styled.h1`
	font-size: 14px;
	text-transform: lowercase;
	color: ${firstTextColor};
	letter-spacing: 0.15em;
	line-height: 20px;
`;

//Loader Logo

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
