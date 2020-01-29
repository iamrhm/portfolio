import styled, { css } from "styled-components";
import {
	firstTextColor,
	secondTextColor
} from "../../config/style";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 22px;
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
	width: 100%;
	word-wrap: break-word;

	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-o-user-select: none;
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
	margin: 12px 0;
	max-width: 420px;

	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-o-user-select: none;
`;

export const Row = styled.div`
	height: 32px;
	width: 100%;
	display: flex;
`;

export const StyledTag = styled.span`
	width: 100%;
	font-size: 14px;
	color: ${secondTextColor};
	font-weight: bold;
	color: #08fdd8;
	* {
		color: inherit;
		text-decoration: none;
	}

	-moz-user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	user-select: text;
	-o-user-select: text;
`;
