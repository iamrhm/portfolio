import styled, { css } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor,
	NOTForCopy
} from "../../config/style";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${primaryBackgroundColor};
	font-weight: 300;
`;

const HeadingTextStyle = css`
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	color: ${firstTextColor};
	font-size: calc(48px + (148 - 48) * ((100vw - 300px) / (1600 - 300)));
	@media only screen and (min-device-width: 767px) {
		left: -8px;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 590px;
	min-width: 300px;
	position: relative;
	display: flex;
	flex-direction: column;

	overflow-x: hidden;
	overflow-y: auto;
	* {
		flex-shrink: 0;
	}
`;

export const Header = styled.div`
	position: relative;
	top: 0;
	left: 0%;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${primaryBackgroundColor};
`;

export const HeaderText = styled.span`
	position: relative;
	text-align: center;
	width: 100%;
	top: 0;
	color: ${firstTextColor};
	${HeadingTextStyle};
	text-transform: uppercase;
	padding-top: 5%;
`;

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: left;
	* {
		${NOTForCopy}
	}
`;

export const InfoSection = styled.div`
	position: relative;
	width: 100%;
	margin: 12px 0;
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
