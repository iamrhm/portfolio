import styled, { css } from "styled-components";
import {
	firstTextColor,
	secondTextColor
} from "../../config/style";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${secondTextColor};
	font-weight: 300;
`;

const HeadingTextStyle = css`
	font-size: 53px;
	font-weight: bold;
	color: ${firstTextColor};
`;

export const Container = styled.div`
	width: 100%;

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: left;

	overflow-x: hidden;
	overflow-y: auto;

	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
`;

export const Heading = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 12px 0;
`;

export const HeaderText = styled.span`
	color: ${firstTextColor};
	${HeadingTextStyle};
`;

export const InfoSection = styled.div`
	position: relative;
	width: 60%;
	min-width: 320px;
	max-width: 420px;
	margin: 12px 0;
`;

export const StyledPara = styled.p`
	width: 100%;
	${BodyTextStyle};
	margin: 4% 0;
`;

export const TimelineSection = styled.div`
	width: 100%;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;

export const TimelineHeader = styled.span`
	${BodyTextStyle};
	font-size: 18px;
	color: ${firstTextColor};
	text-transform: uppercase;
`;

export const TimelineImageFrame = styled.img`
	max-width: 95%;
	margin: 12px 0;
`;

export const BackgroundScreen = styled.div`
	width: 300px;
	height: 64px;
	position: absolute;
	right: 54px;
	top: 108px;
	display: none;

	@media screen and (min-width: 980px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	* {
		overflow: hidden;
	}
`;
