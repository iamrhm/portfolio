import styled from "styled-components";

export const BackgroundScreen = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
`;

export const BackgroundWrapper = styled.span`
	top: 32%;
	right: 6%;
	width: 180px;
	height: 180px;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		top: 10%;

		width: 220px;
		height: 220px;
	}
	@media only screen and (max-width: 833px) and (min-width: 414px) {
    top: 20%;
    width: 220px;
		height: 220px;
	}
`;

export const MaskLayer = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
`;
