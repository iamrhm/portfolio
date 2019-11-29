import styled from "styled-components";

export const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	height: 100%;
	justify-content: flex-start;
	align-items: flex-end;
`;

export const StyledSvg = styled.svg`
	width: 60%;
	height: 60%;
	text-align: left;

	display: flex;
	justify-content: center;
`;

export const StyledPath = styled.path`
	fill: none;
	stroke: #2e2e2e;
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
