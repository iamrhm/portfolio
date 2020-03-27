import styled, { css } from "styled-components";
import { primaryBackgroundColor } from "../../../config/style";

const TitleText = css`
	font-size: 12px;
	color: ${primaryBackgroundColor};
	letter-spacing: 2px;
	text-transform: uppercase;
	font-family: "Lato", sans-serif;
	@media only screen and (min-device-width: 767px) {
		font-size: 20px;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	margin: 25px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media only screen and (min-device-width: 767px) {
		margin-bottom: 80px;
	}
`;

export const TimelineFrame = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 767px) {
		width: 50%;
	}
`;

export const StyledTitle = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 767px) {
		width: 50%;
	}
`;
