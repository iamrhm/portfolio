import styled, { css } from "styled-components";
import { primaryBackgroundColor } from "../../config/style";

const HeaderTextStyle = css`
	font-size: 14px;
	color: ${primaryBackgroundColor};
	letter-spacing: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Lato", sans-serif;
	@media only screen and (min-device-width: 767px) {
		font-size: 24px;
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
		margin-bottom: 70px;
	}
`;

export const TimelineHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	text-align: center;
	margin-bottom: 20px;
	@media only screen and (min-device-width: 767px) {
		margin-bottom: 30px;
	}
`;

export const HeaderText = styled.p`
	position: relative;
	${HeaderTextStyle};
`;

export const TimelineFrame = styled.div`
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
