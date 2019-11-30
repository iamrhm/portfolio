import styled from "styled-components";

export const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	height: 100%;
	justify-content: flex-start;
	align-items: flex-end;

	/* Laptop Screen */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: flex-end;
	}
	/* iPad Screen */
	@media only screen and (max-width: 833px) {
	}
`;

export const StyledSvg = styled.svg`
	width: 60%;
	height: 60%;
	text-align: left;

	display: flex;
	justify-content: center;

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 20%;
		height: 100%;
	}
`;

export const StyledPath = styled.path`
	fill: none;
	stroke: #2e2e2e;
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
