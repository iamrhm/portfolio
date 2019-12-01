import styled from "styled-components";

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
		height: 100%;
	}
	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		height: 64px;
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
	stroke: #2e2e2e;
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
